import { prisma } from "../../database/prisma.js";

const accountSelect = {
  id: true,
  userId: true,
  accountNumber: true,
  type: true,
  status: true,
  currency: true,
  balance: true,
  createdAt: true,
  updatedAt: true,
  user: {
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
    },
  },
} as const;

export async function getAdminAccounts(
  page: number,
  limit: number,
  status?:
    | "ACTIVE"
    | "SUSPENDED"
    | "CLOSED",
) {
  const skip = (page - 1) * limit;

  const where = status
    ? { status }
    : {};

  const [accounts, total] =
    await prisma.$transaction([
      prisma.account.findMany({
        where,
        select: accountSelect,
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
      }),

      prisma.account.count({
        where,
      }),
    ]);

  return {
    accounts,
    total,
    page,
    limit,
    totalPages: Math.ceil(
      total / limit,
    ),
  };
}

export async function getAdminAccount(
  accountId: string,
) {
  return prisma.account.findUnique({
    where: {
      id: accountId,
    },
    select: accountSelect,
  });
}