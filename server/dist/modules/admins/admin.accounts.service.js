"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminAccounts = getAdminAccounts;
exports.getAdminAccount = getAdminAccount;
const prisma_js_1 = require("../../database/prisma.js");
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
};
async function getAdminAccounts(page, limit, status) {
    const skip = (page - 1) * limit;
    const where = status
        ? { status }
        : {};
    const [accounts, total] = await prisma_js_1.prisma.$transaction([
        prisma_js_1.prisma.account.findMany({
            where,
            select: accountSelect,
            orderBy: {
                createdAt: "desc",
            },
            skip,
            take: limit,
        }),
        prisma_js_1.prisma.account.count({
            where,
        }),
    ]);
    return {
        accounts,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
}
async function getAdminAccount(accountId) {
    return prisma_js_1.prisma.account.findUnique({
        where: {
            id: accountId,
        },
        select: accountSelect,
    });
}
//# sourceMappingURL=admin.accounts.service.js.map