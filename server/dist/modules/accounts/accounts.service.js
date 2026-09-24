"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAccounts = getUserAccounts;
exports.getUserAccount = getUserAccount;
exports.getAccountTransactions = getAccountTransactions;
exports.getAccountTransaction = getAccountTransaction;
const prisma_js_1 = require("../../database/prisma.js");
async function getUserAccounts(userId) {
    return prisma_js_1.prisma.account.findMany({
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
async function getUserAccount(userId, accountId) {
    return prisma_js_1.prisma.account.findFirst({
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
async function getAccountTransactions(userId, accountId, page, limit, filters = {}) {
    const skip = (page - 1) * limit;
    const account = await prisma_js_1.prisma.account.findFirst({
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
    const [transactions, total] = await prisma_js_1.prisma.$transaction([
        prisma_js_1.prisma.transaction.findMany({
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
        prisma_js_1.prisma.transaction.count({
            where: transactionWhere,
        }),
    ]);
    return {
        transactions,
        total,
    };
}
async function getAccountTransaction(userId, accountId, transactionId) {
    const account = await prisma_js_1.prisma.account.findFirst({
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
    return prisma_js_1.prisma.transaction.findFirst({
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
//# sourceMappingURL=accounts.service.js.map