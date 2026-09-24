"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.developmentFundAccount = developmentFundAccount;
const node_crypto_1 = require("node:crypto");
const client_js_1 = require("../../generated/prisma/client.js");
const prisma_js_1 = require("../../database/prisma.js");
const env_js_1 = require("../../config/env.js");
function generateReference() {
    return `AZM-DEP-${Date.now()}-${(0, node_crypto_1.randomBytes)(5)
        .toString("hex")
        .toUpperCase()}`;
}
async function developmentFundAccount(accountId, amountInput, description = "Development test funding") {
    if (env_js_1.env.NODE_ENV === "production") {
        throw new Error("Development funding is disabled in production.");
    }
    const amount = new client_js_1.Prisma.Decimal(amountInput);
    if (amount.lte(0)) {
        throw new Error("Funding amount must be greater than zero.");
    }
    return prisma_js_1.prisma.$transaction(async (tx) => {
        const accounts = await tx.$queryRaw `
        SELECT
          "id",
          "status",
          "currency",
          "balance"
        FROM "Account"
        WHERE "id" = ${accountId}
        FOR UPDATE
      `;
        const account = accounts[0];
        if (!account) {
            throw new Error("Account could not be found.");
        }
        if (account.status !== "ACTIVE") {
            throw new Error("The account is not active.");
        }
        const balanceAfter = account.balance.add(amount);
        await tx.account.update({
            where: {
                id: account.id,
            },
            data: {
                balance: balanceAfter,
            },
        });
        const transaction = await tx.transaction.create({
            data: {
                reference: generateReference(),
                type: "DEPOSIT",
                status: "COMPLETED",
                amount,
                currency: account.currency,
                description,
                channel: "SYSTEM",
                recipientAccountId: account.id,
                metadata: {
                    source: "development-funding",
                },
            },
        });
        await tx.ledgerEntry.create({
            data: {
                transactionId: transaction.id,
                accountId: account.id,
                direction: "CREDIT",
                amount,
                currency: account.currency,
                balanceAfter,
            },
        });
        return {
            transaction,
            balanceBefore: account.balance,
            balanceAfter,
        };
    }, {
        isolationLevel: client_js_1.Prisma.TransactionIsolationLevel.Serializable,
    });
}
//# sourceMappingURL=development-funding.service.js.map