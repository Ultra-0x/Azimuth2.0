import {
  createHash,
  randomBytes,
} from "node:crypto";
import argon2 from "argon2";
import { prisma } from "../../database/prisma.js";

const CHALLENGE_DURATION_MS =
  5 * 60 * 1000;

function hashChallenge(value: string): string {
  return createHash("sha256")
    .update(value)
    .digest("hex");
}

export async function createTransactionAuthChallenge(
  userId: string,
  transferId: string,
  password: string,
) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User not found.");
  }

  const transfer =
    await prisma.transfer.findFirst({
      where: {
        id: transferId,
        userId,
      },
    });

  if (!transfer) {
    throw new Error("Transfer not found.");
  }

  if (transfer.status !== "PENDING") {
    throw new Error(
      "This transfer cannot be authenticated.",
    );
  }

  const validPassword = await argon2.verify(
    user.passwordHash,
    password,
  );

  if (!validPassword) {
    throw new Error(
      "Transaction authentication failed.",
    );
  }

  const challenge = randomBytes(32).toString(
    "hex",
  );

  const expiresAt = new Date(
    Date.now() + CHALLENGE_DURATION_MS,
  );

  await prisma.$transaction(async (tx) => {
    await tx.transactionAuthChallenge.updateMany({
      where: {
        userId,
        transferId,
        consumedAt: null,
        expiresAt: {
          gt: new Date(),
        },
      },
      data: {
        consumedAt: new Date(),
      },
    });

    await tx.transactionAuthChallenge.create({
      data: {
        userId,
        transferId,
        method: "PASSWORD",
        challengeHash:
          hashChallenge(challenge),
        expiresAt,
      },
    });
  });

  return {
    challenge,
    expiresAt,
  };
}

export async function deleteExpiredTransactionAuthChallenges() {
  return prisma.transactionAuthChallenge.deleteMany({
    where: {
      OR: [
        {
          expiresAt: {
            lte: new Date(),
          },
        },
        {
          consumedAt: {
            not: null,
          },
        },
      ],
    },
  });
}