"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminOverview = getAdminOverview;
const prisma_js_1 = require("../../database/prisma.js");
async function getAdminOverview() {
    const [users, activeUsers, accounts, activeAccounts, loans, pendingLoans, openTickets, recentTransactions,] = await prisma_js_1.prisma.$transaction([
        prisma_js_1.prisma.user.count(),
        prisma_js_1.prisma.user.count({
            where: {
                status: "ACTIVE",
            },
        }),
        prisma_js_1.prisma.account.count(),
        prisma_js_1.prisma.account.count({
            where: {
                status: "ACTIVE",
            },
        }),
        prisma_js_1.prisma.loan.count(),
        prisma_js_1.prisma.loan.count({
            where: {
                status: "PENDING",
            },
        }),
        prisma_js_1.prisma.supportTicket.count({
            where: {
                status: {
                    in: ["OPEN", "IN_PROGRESS"],
                },
            },
        }),
        prisma_js_1.prisma.transaction.findMany({
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
//# sourceMappingURL=admin.service.js.map