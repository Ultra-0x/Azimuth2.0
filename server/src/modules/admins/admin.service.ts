import { prisma } from "../../database/prisma.js";

export async function getAdminOverview() {
  const [
    users,
    activeUsers,
    accounts,
    activeAccounts,
    loans,
    pendingLoans,
    openTickets,
    recentTransactions,
  ] = await prisma.$transaction([
    prisma.user.count(),

    prisma.user.count({
      where: {
        status: "ACTIVE",
      },
    }),

    prisma.account.count(),

    prisma.account.count({
      where: {
        status: "ACTIVE",
      },
    }),

    prisma.loan.count(),

    prisma.loan.count({
      where: {
        status: "PENDING",
      },
    }),

    prisma.supportTicket.count({
      where: {
        status: {
          in: ["OPEN", "IN_PROGRESS"],
        },
      },
    }),

    prisma.transaction.findMany({
      select: {
        id: true,
        reference: true,
        type: true,
        status: true,
        amount: true,
        currency: true,
        channel: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 20,
    }),
  ]);

  return {
    statistics: {
      users,
      activeUsers,
      accounts,
      activeAccounts,
      loans,
      pendingLoans,
      openTickets,
    },
    recentTransactions,
  };
}