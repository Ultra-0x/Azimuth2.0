import { prisma } from "../../database/prisma.js";

const userSelect = {
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  phone: true,
  status: true,
  role: true,
  emailVerifiedAt: true,
  createdAt: true,
  updatedAt: true,

  accounts: {
    select: {
      id: true,
      accountNumber: true,
      type: true,
      status: true,
      currency: true,
      balance: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  },
} as const;

export async function getAdminUsers(
  page: number,
  limit: number,
  status?:
    | "ACTIVE"
    | "SUSPENDED"
    | "LOCKED"
    | "CLOSED",
) {
  const skip = (page - 1) * limit;

  const where = status
    ? { status }
    : {};

  const [users, total] =
    await prisma.$transaction([
      prisma.user.findMany({
        where,
        select: userSelect,
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
      }),

      prisma.user.count({
        where,
      }),
    ]);

  return {
    users,
    total,
    page,
    limit,
    totalPages: Math.ceil(
      total / limit,
    ),
  };
}

export async function updateAdminUserStatus(
  userId: string,
  status:
    | "ACTIVE"
    | "SUSPENDED"
    | "LOCKED"
    | "CLOSED",
) {
  const user =
    await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        role: true,
      },
    });

  if (!user) {
    throw new Error(
      "User not found.",
    );
  }

  if (user.role === "ADMIN") {
    throw new Error(
      "Admin accounts cannot be modified through customer status management.",
    );
  }

  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      status,
    },
    select: userSelect,
  });
}