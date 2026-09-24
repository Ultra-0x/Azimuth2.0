"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoan = createLoan;
exports.getLoans = getLoans;
exports.getLoan = getLoan;
exports.updateLoanStatus = updateLoanStatus;
exports.disburseLoan = disburseLoan;
exports.repayLoan = repayLoan;
const node_crypto_1 = require("node:crypto");
const prisma_js_1 = require("../../database/prisma.js");
const client_js_1 = require("../../generated/prisma/client.js");
const loanSelect = {
    id: true,
    accountId: true,
    amount: true,
    interestRate: true,
    totalRepayment: true,
    amountRepaid: true,
    currency: true,
    termMonths: true,
    status: true,
    purpose: true,
    approvedAt: true,
    disbursedAt: true,
    dueDate: true,
    createdAt: true,
    updatedAt: true,
};
async function createLoan(userId, accountId, amount, interestRate, termMonths, purpose) {
    const account = await prisma_js_1.prisma.account.findFirst({
        where: {
            id: accountId,
            userId,
        },
        select: {
            id: true,
            type: true,
            status: true,
            currency: true,
        },
    });
    if (!account) {
        throw new Error("Account not found.");
    }
    if (account.status !== "ACTIVE") {
        throw new Error("The loan account must be active.");
    }
    const principal = new client_js_1.Prisma.Decimal(amount);
    const rate = new client_js_1.Prisma.Decimal(interestRate);
    const interest = principal
        .mul(rate)
        .div(100);
    const totalRepayment = principal.add(interest);
    return prisma_js_1.prisma.loan.create({
        data: {
            userId,
            accountId,
            amount: principal,
            interestRate: rate,
            totalRepayment,
            currency: account.currency,
            termMonths,
            ...(purpose !== undefined
                ? {
                    purpose,
                }
                : {}),
            status: "PENDING",
        },
        select: loanSelect,
    });
}
async function getLoans(userId, page, limit, status) {
    const skip = (page - 1) * limit;
    const where = {
        userId,
        ...(status !== undefined
            ? {
                status,
            }
            : {}),
    };
    const [loans, total] = await prisma_js_1.prisma.$transaction([
        prisma_js_1.prisma.loan.findMany({
            where,
            select: loanSelect,
            orderBy: {
                createdAt: "desc",
            },
            skip,
            take: limit,
        }),
        prisma_js_1.prisma.loan.count({
            where,
        }),
    ]);
    return {
        loans,
        total,
    };
}
async function getLoan(userId, loanId) {
    return prisma_js_1.prisma.loan.findFirst({
        where: {
            id: loanId,
            userId,
        },
        select: loanSelect,
    });
}
async function updateLoanStatus(loanId, status) {
    const loan = await prisma_js_1.prisma.loan.findUnique({
        where: {
            id: loanId,
        },
        select: {
            id: true,
            status: true,
        },
    });
    if (!loan) {
        throw new Error("Loan not found.");
    }
    if (loan.status === "PAID") {
        throw new Error("A paid loan cannot be changed.");
    }
    if (loan.status === "ACTIVE") {
        throw new Error("An active loan cannot be changed through this endpoint.");
    }
    if (loan.status === "REJECTED" ||
        loan.status === "CANCELLED") {
        throw new Error("This loan is already closed.");
    }
    const data = {
        status,
        ...(status === "APPROVED"
            ? {
                approvedAt: new Date(),
            }
            : {}),
    };
    return prisma_js_1.prisma.loan.update({
        where: {
            id: loan.id,
        },
        data,
        select: loanSelect,
    });
}
async function disburseLoan(userId, loanId, idempotencyKey) {
    return prisma_js_1.prisma.$transaction(async (tx) => {
        const existingTransaction = await tx.transaction.findUnique({
            where: {
                idempotencyKey,
            },
            select: {
                id: true,
                loanRepayment: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        if (existingTransaction) {
            throw new Error("This idempotency key has already been used.");
        }
        const loan = await tx.loan.findFirst({
            where: {
                id: loanId,
                userId,
            },
            select: {
                id: true,
                accountId: true,
                amount: true,
                currency: true,
                status: true,
                termMonths: true,
            },
        });
        if (!loan) {
            throw new Error("Loan not found.");
        }
        if (loan.status !== "APPROVED") {
            throw new Error("Only approved loans can be disbursed.");
        }
        const lockedAccount = await tx.$queryRaw `
          SELECT id, balance
          FROM "Account"
          WHERE id = ${loan.accountId}
          FOR UPDATE
        `;
        if (lockedAccount.length === 0) {
            throw new Error("Loan account not found.");
        }
        const accountBalance = lockedAccount[0].balance;
        const newBalance = accountBalance.plus(loan.amount);
        const transaction = await tx.transaction.create({
            data: {
                reference: `LD-${(0, node_crypto_1.randomUUID)()}`,
                idempotencyKey,
                type: "LOAN_DISBURSEMENT",
                status: "COMPLETED",
                amount: loan.amount,
                currency: loan.currency,
                description: "Loan disbursement",
                channel: "SYSTEM",
                userId,
                recipientAccountId: loan.accountId,
            },
            select: {
                id: true,
                reference: true,
                amount: true,
                currency: true,
                status: true,
                createdAt: true,
            },
        });
        await tx.account.update({
            where: {
                id: loan.accountId,
            },
            data: {
                balance: newBalance,
            },
        });
        await tx.ledgerEntry.create({
            data: {
                transactionId: transaction.id,
                accountId: loan.accountId,
                direction: "CREDIT",
                amount: loan.amount,
                currency: loan.currency,
                balanceAfter: newBalance,
            },
        });
        const dueDate = new Date();
        dueDate.setMonth(dueDate.getMonth() + loan.termMonths);
        const updatedLoan = await tx.loan.update({
            where: {
                id: loan.id,
            },
            data: {
                status: "ACTIVE",
                disbursedAt: new Date(),
                dueDate,
            },
            select: loanSelect,
        });
        return {
            transaction,
            loan: updatedLoan,
        };
    }, {
        isolationLevel: client_js_1.Prisma.TransactionIsolationLevel.Serializable,
    });
}
async function repayLoan(userId, loanId, sourceAccountId, amount, idempotencyKey) {
    if (amount <= 0) {
        throw new Error("Repayment amount must be greater than zero.");
    }
    return prisma_js_1.prisma.$transaction(async (tx) => {
        const existingTransaction = await tx.transaction.findUnique({
            where: {
                idempotencyKey,
            },
            select: {
                id: true,
                loanRepayment: {
                    select: {
                        id: true,
                        loanId: true,
                        amount: true,
                        currency: true,
                        status: true,
                    },
                },
            },
        });
        if (existingTransaction) {
            if (existingTransaction.loanRepayment &&
                existingTransaction.loanRepayment.loanId ===
                    loanId) {
                return {
                    transactionId: existingTransaction.id,
                    repayment: existingTransaction.loanRepayment,
                    idempotent: true,
                };
            }
            throw new Error("This idempotency key has already been used.");
        }
        const loan = await tx.loan.findFirst({
            where: {
                id: loanId,
                userId,
            },
            select: {
                id: true,
                accountId: true,
                amount: true,
                amountRepaid: true,
                totalRepayment: true,
                currency: true,
                status: true,
            },
        });
        if (!loan) {
            throw new Error("Loan not found.");
        }
        if (loan.status !== "ACTIVE") {
            throw new Error("Only active loans can receive repayments.");
        }
        const sourceAccount = await tx.account.findFirst({
            where: {
                id: sourceAccountId,
                userId,
            },
            select: {
                id: true,
                status: true,
                currency: true,
                balance: true,
            },
        });
        if (!sourceAccount) {
            throw new Error("Source account not found.");
        }
        if (sourceAccount.status !== "ACTIVE") {
            throw new Error("The source account must be active.");
        }
        if (sourceAccount.currency !== loan.currency) {
            throw new Error("Source account and loan currencies must match.");
        }
        const remaining = loan.totalRepayment.minus(loan.amountRepaid);
        const repaymentAmount = new client_js_1.Prisma.Decimal(amount);
        if (repaymentAmount.greaterThan(remaining)) {
            throw new Error("Repayment amount exceeds the remaining loan balance.");
        }
        const lockedSource = await tx.$queryRaw `
          SELECT id, balance
          FROM "Account"
          WHERE id = ${sourceAccount.id}
          FOR UPDATE
        `;
        if (lockedSource.length === 0) {
            throw new Error("Unable to lock source account.");
        }
        const sourceBalance = lockedSource[0].balance;
        if (sourceBalance.lessThan(repaymentAmount)) {
            throw new Error("Insufficient funds.");
        }
        const newSourceBalance = sourceBalance.minus(repaymentAmount);
        const newAmountRepaid = loan.amountRepaid.add(repaymentAmount);
        const transaction = await tx.transaction.create({
            data: {
                reference: `LR-${(0, node_crypto_1.randomUUID)()}`,
                idempotencyKey,
                type: "LOAN_REPAYMENT",
                status: "COMPLETED",
                amount: repaymentAmount,
                currency: loan.currency,
                description: "Loan repayment",
                channel: "SYSTEM",
                userId,
                senderAccountId: sourceAccount.id,
            },
            select: {
                id: true,
                reference: true,
                amount: true,
                currency: true,
                status: true,
                createdAt: true,
            },
        });
        await tx.account.update({
            where: {
                id: sourceAccount.id,
            },
            data: {
                balance: newSourceBalance,
            },
        });
        await tx.ledgerEntry.create({
            data: {
                transactionId: transaction.id,
                accountId: sourceAccount.id,
                direction: "DEBIT",
                amount: repaymentAmount,
                currency: loan.currency,
                balanceAfter: newSourceBalance,
            },
        });
        const newLoanStatus = newAmountRepaid.greaterThanOrEqualTo(loan.totalRepayment)
            ? "PAID"
            : "ACTIVE";
        const repayment = await tx.loanRepayment.create({
            data: {
                loanId: loan.id,
                transactionId: transaction.id,
                amount: repaymentAmount,
                currency: loan.currency,
                status: "COMPLETED",
                paidAt: new Date(),
            },
            select: {
                id: true,
                loanId: true,
                transactionId: true,
                amount: true,
                currency: true,
                status: true,
                paidAt: true,
                createdAt: true,
            },
        });
        const updatedLoan = await tx.loan.update({
            where: {
                id: loan.id,
            },
            data: {
                amountRepaid: newAmountRepaid,
                status: newLoanStatus,
            },
            select: loanSelect,
        });
        return {
            transaction,
            repayment,
            loan: updatedLoan,
            idempotent: false,
        };
    }, {
        isolationLevel: client_js_1.Prisma.TransactionIsolationLevel.Serializable,
    });
}
//# sourceMappingURL=loan.service.js.map