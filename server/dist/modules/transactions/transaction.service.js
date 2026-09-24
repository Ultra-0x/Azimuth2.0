"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactions = getTransactions;
exports.getTransaction = getTransaction;
exports.getCardTransactions = getCardTransactions;
exports.getCardTransaction = getCardTransaction;
const prisma_js_1 = require("../../database/prisma.js");
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
};
function buildTransactionWhere(filters, userId, cardId) {
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
async function getTransactions(userId, page, limit, filters = {}) {
    const skip = (page - 1) * limit;
    const transactionWhere = buildTransactionWhere(filters, userId);
    const [transactions, total] = await prisma_js_1.prisma.$transaction([
        prisma_js_1.prisma.transaction.findMany({
            where: transactionWhere,
            select: transactionSelect,
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
async function getTransaction(userId, transactionId) {
    return prisma_js_1.prisma.transaction.findFirst({
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
async function getCardTransactions(userId, cardId, page, limit, filters = {}) {
    const skip = (page - 1) * limit;
    const card = await prisma_js_1.prisma.card.findFirst({
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
    const transactionWhere = buildTransactionWhere(filters, undefined, cardId);
    const [transactions, total] = await prisma_js_1.prisma.$transaction([
        prisma_js_1.prisma.transaction.findMany({
            where: transactionWhere,
            select: transactionSelect,
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
async function getCardTransaction(userId, cardId, transactionId) {
    const card = await prisma_js_1.prisma.card.findFirst({
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
    return prisma_js_1.prisma.transaction.findFirst({
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
//# sourceMappingURL=transaction.service.js.map