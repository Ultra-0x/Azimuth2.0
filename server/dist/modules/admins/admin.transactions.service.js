"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminTransactions = getAdminTransactions;
exports.getAdminTransaction = getAdminTransaction;
exports.createAdminTransfer = createAdminTransfer;
const prisma_js_1 = require("../../database/prisma.js");
async function getAdminTransactions(page, limit, status, type) {
    const skip = (page - 1) * limit;
    const where = {
        ...(status ? { status: status } : {}),
        ...(type ? { type: type } : {}),
    };
    const [transactions, total] = await prisma_js_1.prisma.$transaction([
        prisma_js_1.prisma.transaction.findMany({
            where,
            orderBy: {
                createdAt: "desc",
            },
            skip,
            take: limit,
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
                createdAt: true,
            },
        }),
        prisma_js_1.prisma.transaction.count({
            where,
        }),
    ]);
    return {
        transactions,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
}
async function getAdminTransaction(transactionId) {
    return prisma_js_1.prisma.transaction.findUnique({
        where: {
            id: transactionId,
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
            },
        },
    });
}
async function createAdminTransfer(input) {
    return prisma_js_1.prisma.$transaction(async (tx) => {
        const existing = await tx.transaction.findUnique({
            where: {
                idempotencyKey: input.idempotencyKey,
            },
        });
        if (existing) {
            return existing;
        }
        if (input.amount <= 0) {
            throw new Error("Transfer amount must be greater than zero.");
        }
        const destination = await tx.account.findUnique({
            where: {
                id: input.toAccountId,
            },
            select: {
                id: true,
                userId: true,
                status: true,
                currency: true,
            },
        });
        if (!destination) {
            throw new Error("Destination account not found.");
        }
        if (destination.status !== "ACTIVE") {
            throw new Error("Destination account is not active.");
        }
        if (destination.currency !== input.currency) {
            throw new Error("Currency does not match destination account.");
        }
        let sourceAccount;
        if (input.fromAccountId) {
            const source = await tx.account.findUnique({
                where: {
                    id: input.fromAccountId,
                },
                select: {
                    id: true,
                    balance: true,
                    status: true,
                    currency: true,
                },
            });
            if (!source) {
                throw new Error("Source account not found.");
            }
            if (source.status !== "ACTIVE") {
                throw new Error("Source account is not active.");
            }
            if (source.currency !== input.currency) {
                throw new Error("Currency does not match source account.");
            }
            sourceAccount = source;
        }
        const accountsToLock = [
            ...(sourceAccount
                ? [sourceAccount.id]
                : []),
            destination.id,
        ].sort();
        for (const accountId of accountsToLock) {
            await tx.$queryRaw `
          SELECT "id"
          FROM "Account"
          WHERE "id" = ${accountId}
          FOR UPDATE
        `;
        }
        if (sourceAccount) {
            const lockedSource = await tx.account.findUnique({
                where: {
                    id: sourceAccount.id,
                },
                select: {
                    id: true,
                    balance: true,
                },
            });
            if (!lockedSource ||
                Number(lockedSource.balance) <
                    input.amount) {
                throw new Error("Source account has insufficient funds.");
            }
            sourceAccount = {
                ...sourceAccount,
                balance: lockedSource.balance,
            };
        }
        const reference = `ADM-${Date.now()}-${Math.random()
            .toString(36)
            .slice(2, 10)
            .toUpperCase()}`;
        const metadata = {
            source: "ADMIN",
            adminId: input.adminId,
            systemFunded: !sourceAccount,
        };
        const transaction = await tx.transaction.create({
            data: {
                reference,
                idempotencyKey: input.idempotencyKey,
                type: "TRANSFER",
                status: "COMPLETED",
                amount: input.amount,
                currency: input.currency,
                description: input.description ??
                    "Administrative transfer.",
                channel: "SYSTEM",
                senderAccountId: sourceAccount?.id ?? null,
                recipientAccountId: destination.id,
                userId: destination.userId,
                metadata,
            },
        });
        if (sourceAccount) {
            const newSourceBalance = Number(sourceAccount.balance) -
                input.amount;
            await tx.account.update({
                where: {
                    id: sourceAccount.id,
                },
                data: {
                    balance: {
                        decrement: input.amount,
                    },
                },
            });
            await tx.ledgerEntry.create({
                data: {
                    transactionId: transaction.id,
                    accountId: sourceAccount.id,
                    direction: "DEBIT",
                    amount: input.amount,
                    currency: input.currency,
                    balanceAfter: newSourceBalance,
                },
            });
        }
        const currentDestination = await tx.account.findUnique({
            where: {
                id: destination.id,
            },
            select: {
                balance: true,
            },
        });
        const destinationBalance = Number(currentDestination?.balance ?? 0) + input.amount;
        await tx.account.update({
            where: {
                id: destination.id,
            },
            data: {
                balance: {
                    increment: input.amount,
                },
            },
        });
        await tx.ledgerEntry.create({
            data: {
                transactionId: transaction.id,
                accountId: destination.id,
                direction: "CREDIT",
                amount: input.amount,
                currency: input.currency,
                balanceAfter: destinationBalance,
            },
        });
        return transaction;
    }, {
        isolationLevel: "Serializable",
    });
}
//# sourceMappingURL=admin.transactions.service.js.map