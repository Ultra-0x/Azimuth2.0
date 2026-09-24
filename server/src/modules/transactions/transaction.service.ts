import { prisma } from "../../database/prisma.js";
import type {
  TransactionStatus,
  TransactionType,
} from "../../generated/prisma/client.js";

export interface CardTransactionFilters {
  type?: TransactionType;
  status?: TransactionStatus;
  from?: string;
  to?: string;
}

export interface TransactionFilters {
  type?: TransactionType;
  status?: TransactionStatus;
  from?: string;
  to?: string;
}

const transactionSelect = {
  id: true,
  reference: true,
  type: true,
  status: true,
  amount: true,
  currency: true,
  description: true,
  channel: true,
  cardId: true,
  senderAccountId: true,
  recipientAccountId: true,
  createdAt: true,
  updatedAt: true,
} as const;

function buildTransactionWhere(
  filters: TransactionFilters,
  userId?: string,
  cardId?: string,
) {
  return {
    ...(userId !== undefined ? { userId } : {}),
    ...(cardId !== undefined ? { cardId } : {}),
    ...(filters.type !== undefined
      ? {
          type: filters.type,
        }
      : {}),
    ...(filters.status !== undefined
      ? {
          status: filters.status,
        }
      : {}),
    ...(filters.from !== undefined || filters.to !== undefined
      ? {
          createdAt: {
            ...(filters.from !== undefined
              ? {
                  gte: new Date(filters.from),
                }
              : {}),
            ...(filters.to !== undefined
              ? {
                  lte: new Date(filters.to),
                }
              : {}),
          },
        }
      : {}),
  };
}

// ─────────────────────────────────────────────
// CUSTOMER TRANSACTIONS
// ─────────────────────────────────────────────

export async function getTransactions(
  userId: string,
  page: number,
  limit: number,
  filters: TransactionFilters = {},
) {
  const skip = (page - 1) * limit;

  const transactionWhere = buildTransactionWhere(
    filters,
    userId,
  );

  const [transactions, total] = await prisma.$transaction([
    prisma.transaction.findMany({
      where: transactionWhere,
      select: transactionSelect,
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    }),

    prisma.transaction.count({
      where: transactionWhere,
    }),
  ]);

  return {
    transactions,
    total,
  };
}

export async function getTransaction(
  userId: string,
  transactionId: string,
) {
  return prisma.transaction.findFirst({
    where: {
      id: transactionId,
      userId,
    },
    select: {
      ...transactionSelect,

      ledgerEntries: {
        select: {
          id: true,
          accountId: true,
          direction: true,
          amount: true,
          currency: true,
          balanceAfter: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });
}

// ─────────────────────────────────────────────
// CARD TRANSACTIONS
// ─────────────────────────────────────────────

export async function getCardTransactions(
  userId: string,
  cardId: string,
  page: number,
  limit: number,
  filters: CardTransactionFilters = {},
) {
  const skip = (page - 1) * limit;

  const card = await prisma.card.findFirst({
    where: {
      id: cardId,
      userId,
    },
    select: {
      id: true,
    },
  });

  if (!card) {
    return null;
  }

  const transactionWhere = buildTransactionWhere(
    filters,
    undefined,
    cardId,
  );

  const [transactions, total] = await prisma.$transaction([
    prisma.transaction.findMany({
      where: transactionWhere,
      select: transactionSelect,
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    }),

    prisma.transaction.count({
      where: transactionWhere,
    }),
  ]);

  return {
    transactions,
    total,
  };
}

export async function getCardTransaction(
  userId: string,
  cardId: string,
  transactionId: string,
) {
  const card = await prisma.card.findFirst({
    where: {
      id: cardId,
      userId,
    },
    select: {
      id: true,
    },
  });

  if (!card) {
    return null;
  }

  return prisma.transaction.findFirst({
    where: {
      id: transactionId,
      cardId,
    },
    select: {
      ...transactionSelect,

      ledgerEntries: {
        select: {
          id: true,
          accountId: true,
          direction: true,
          amount: true,
          currency: true,
          balanceAfter: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });
}