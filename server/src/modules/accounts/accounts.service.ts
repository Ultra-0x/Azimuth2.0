import { prisma } from "../../database/prisma.js";
import type {
  TransactionStatus,
  TransactionType,
} from "../../generated/prisma/client.js";

export interface TransactionFilters {
  type?: TransactionType;
  status?: TransactionStatus;
  from?: string;
  to?: string;
}

export async function getUserAccounts(
  userId: string,
) {
  return prisma.account.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      accountNumber: true,
      type: true,
      status: true,
      currency: true,
      balance: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}

export async function getUserAccount(
  userId: string,
  accountId: string,
) {
  return prisma.account.findFirst({
    where: {
      id: accountId,
      userId,
    },
    select: {
      id: true,
      accountNumber: true,
      type: true,
      status: true,
      currency: true,
      balance: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function getAccountTransactions(
  userId: string,
  accountId: string,
  page: number,
  limit: number,
  filters: TransactionFilters = {},
) {
  const skip = (page - 1) * limit;

  const account = await prisma.account.findFirst({
    where: {
      id: accountId,
      userId,
    },
    select: {
      id: true,
    },
  });

  if (!account) {
    return null;
  }

  const transactionWhere = {
    OR: [
      {
        senderAccountId: accountId,
      },
      {
        recipientAccountId: accountId,
      },
    ],

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

    ...(filters.from !== undefined ||
    filters.to !== undefined
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

  const [transactions, total] =
    await prisma.$transaction([
      prisma.transaction.findMany({
        where: transactionWhere,
        select: {
          id: true,
          reference: true,
          type: true,
          status: true,
          amount: true,
          currency: true,
          description: true,
          channel: true,
          senderAccountId: true,
          recipientAccountId: true,
          createdAt: true,
          updatedAt: true,
        },
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

export async function getAccountTransaction(
  userId: string,
  accountId: string,
  transactionId: string,
) {
  const account = await prisma.account.findFirst({
    where: {
      id: accountId,
      userId,
    },
    select: {
      id: true,
    },
  });

  if (!account) {
    return null;
  }

  return prisma.transaction.findFirst({
    where: {
      id: transactionId,
      OR: [
        {
          senderAccountId: accountId,
        },
        {
          recipientAccountId: accountId,
        },
      ],
    },
    select: {
      id: true,
      reference: true,
      type: true,
      status: true,
      amount: true,
      currency: true,
      description: true,
      channel: true,
      senderAccountId: true,
      recipientAccountId: true,
      userId: true,
      metadata: true,
      createdAt: true,
      updatedAt: true,
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
