import { createHash, randomInt } from "node:crypto";
import { prisma } from "../../database/prisma.js";
import type {
  CardStatus,
  CardType,
} from "../../generated/prisma/client.js";

function hashCardNumber(cardNumber: string): string {
  return createHash("sha256")
    .update(cardNumber)
    .digest("hex");
}

function generateCardNumber(): string {
  const prefix = "5284";

  const randomPart = [
    randomInt(1000, 10000),
    randomInt(1000, 10000),
    randomInt(1000, 10000),
  ].join("");

  const first15 = `${prefix}${randomPart}`.slice(0, 15);

  let sum = 0;
  let shouldDouble = true;

  for (let index = first15.length - 1; index >= 0; index--) {
    let digit = Number(first15[index]);

    if (shouldDouble) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  const checkDigit = (10 - (sum % 10)) % 10;

  return `${first15}${checkDigit}`;
}

function generateExpiryDate() {
  const now = new Date();
  const expiry = new Date(now);

  expiry.setFullYear(expiry.getFullYear() + 4);

  return {
    month: expiry.getMonth() + 1,
    year: expiry.getFullYear(),
  };
}

function isCardExpired(
  expiryMonth: number,
  expiryYear: number,
): boolean {
  const now = new Date();

  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  return (
    expiryYear < currentYear ||
    (expiryYear === currentYear &&
      expiryMonth < currentMonth)
  );
}

export async function createCard(
  userId: string,
  accountId: string,
  type: CardType,
) {
  const account = await prisma.account.findFirst({
    where: {
      id: accountId,
      userId,
    },
    select: {
      id: true,
      userId: true,
      status: true,
      accountNumber: true,
    },
  });

  if (!account) {
    throw new Error("Account not found.");
  }

  if (account.status !== "ACTIVE") {
    throw new Error(
      "Cards can only be issued for active accounts.",
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      firstName: true,
      lastName: true,
    },
  });

  if (!user) {
    throw new Error("User not found.");
  }

  const cardNumber = generateCardNumber();
  const cardNumberHash = hashCardNumber(cardNumber);
  const lastFour = cardNumber.slice(-4);
  const expiry = generateExpiryDate();

  const card = await prisma.card.create({
    data: {
      userId,
      accountId,
      type,
      status: "ACTIVE",
      cardNumberHash,
      lastFour,
      expiryMonth: expiry.month,
      expiryYear: expiry.year,
    },
    select: {
      id: true,
      accountId: true,
      type: true,
      status: true,
      lastFour: true,
      expiryMonth: true,
      expiryYear: true,
      frozenAt: true,
      blockedAt: true,
      cancelledAt: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return {
    card,
    cardNumber,
    cardholderName: `${user.firstName} ${user.lastName}`,
    network: "MASTERCARD",
    accountNumber: account.accountNumber,
  };
}

export async function getUserCards(userId: string) {
  const cards = await prisma.card.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      accountId: true,
      type: true,
      status: true,
      lastFour: true,
      expiryMonth: true,
      expiryYear: true,
      frozenAt: true,
      blockedAt: true,
      cancelledAt: true,
      createdAt: true,
      updatedAt: true,
      account: {
        select: {
          accountNumber: true,
        },
      },
      user: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return cards.map((card) => ({
    id: card.id,
    accountId: card.accountId,
    type: card.type,
    status: card.status,
    lastFour: card.lastFour,
    expiryMonth: card.expiryMonth,
    expiryYear: card.expiryYear,
    frozenAt: card.frozenAt,
    blockedAt: card.blockedAt,
    cancelledAt: card.cancelledAt,
    createdAt: card.createdAt,
    updatedAt: card.updatedAt,
    cardholderName: `${card.user.firstName} ${card.user.lastName}`,
    network: "MASTERCARD" as const,
    accountNumber: card.account.accountNumber,
  }));
}

export async function getUserCard(
  userId: string,
  cardId: string,
) {
  return prisma.card.findFirst({
    where: {
      id: cardId,
      userId,
    },
    select: {
      id: true,
      accountId: true,
      type: true,
      status: true,
      lastFour: true,
      expiryMonth: true,
      expiryYear: true,
      frozenAt: true,
      blockedAt: true,
      cancelledAt: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function updateCardStatus(
  userId: string,
  cardId: string,
  status: CardStatus,
) {
  const card = await prisma.card.findFirst({
    where: {
      id: cardId,
      userId,
    },
  });

  if (!card) {
    throw new Error("Card not found.");
  }

  if (
    status !== "CANCELLED" &&
    isCardExpired(
      card.expiryMonth,
      card.expiryYear,
    )
  ) {
    throw new Error(
      "This card has expired and cannot be activated or modified.",
    );
  }

  if (status === card.status) {
    return card;
  }

  const allowedTransitions: Record<
    CardStatus,
    CardStatus[]
  > = {
    ACTIVE: ["FROZEN", "BLOCKED", "CANCELLED"],
    FROZEN: ["ACTIVE", "BLOCKED", "CANCELLED"],
    BLOCKED: [],
    EXPIRED: [],
    CANCELLED: [],
  };

  const allowed =
    allowedTransitions[card.status] ?? [];

  if (!allowed.includes(status)) {
    throw new Error(
      `Card cannot transition from ${card.status} to ${status}.`,
    );
  }

  const now = new Date();

  return prisma.card.update({
    where: {
      id: card.id,
    },
    data: {
      status,
      frozenAt:
        status === "FROZEN"
          ? card.frozenAt ?? now
          : status === "ACTIVE"
            ? null
            : card.frozenAt,
      blockedAt:
        status === "BLOCKED"
          ? card.blockedAt ?? now
          : card.blockedAt,
      cancelledAt:
        status === "CANCELLED"
          ? card.cancelledAt ?? now
          : card.cancelledAt,
    },
    select: {
      id: true,
      accountId: true,
      type: true,
      status: true,
      lastFour: true,
      expiryMonth: true,
      expiryYear: true,
      frozenAt: true,
      blockedAt: true,
      cancelledAt: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}