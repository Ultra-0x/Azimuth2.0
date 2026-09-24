"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminLoans = getAdminLoans;
exports.getAdminLoan = getAdminLoan;
exports.updateAdminLoanStatus = updateAdminLoanStatus;
exports.disburseAdminLoan = disburseAdminLoan;
const prisma_js_1 = require("../../database/prisma.js");
const loanSelect = {
    id: true,
    userId: true,
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
    user: {
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
        },
    },
    account: {
        select: {
            id: true,
            accountNumber: true,
            currency: true,
            status: true,
        },
    },
};
async function getAdminLoans(page, limit, status) {
    const skip = (page - 1) * limit;
    const where = status ? { status } : {};
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
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
}
async function getAdminLoan(loanId) {
    return prisma_js_1.prisma.loan.findUnique({
        where: {
            id: loanId,
        },
        select: loanSelect,
    });
}
async function updateAdminLoanStatus(loanId, status) {
    return prisma_js_1.prisma.$transaction(async (tx) => {
        const loan = await tx.loan.findUnique({
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
        if (loan.status !== "PENDING") {
            throw new Error("Only pending loans can be approved or rejected.");
        }
        return tx.loan.update({
            where: {
                id: loan.id,
            },
            data: {
                status,
                ...(status === "APPROVED"
                    ? {
                        approvedAt: new Date(),
                    }
                    : {}),
            },
            select: loanSelect,
        });
    });
}
async function disburseAdminLoan(loanId, adminId, idempotencyKey) {
    return prisma_js_1.prisma.$transaction(async (tx) => {
        const existingTransaction = await tx.transaction.findUnique({
            where: {
                idempotencyKey,
            },
            select: {
                id: true,
                reference: true,
                status: true,
            },
        });
        if (existingTransaction) {
            return existingTransaction;
        }
        const loan = await tx.loan.findUnique({
            where: {
                id: loanId,
            },
            select: {
                id: true,
                userId: true,
                accountId: true,
                amount: true,
                currency: true,
                status: true,
                disbursedAt: true,
                account: {
                    select: {
                        id: true,
                        currency: true,
                        status: true,
                        balance: true,
                    },
                },
            },
        });
        if (!loan) {
            throw new Error("Loan not found.");
        }
        if (loan.status !== "APPROVED") {
            throw new Error("Only approved loans can be disbursed.");
        }
        if (loan.disbursedAt) {
            throw new Error("Loan has already been disbursed.");
        }
        if (loan.account.status !== "ACTIVE") {
            throw new Error("The customer's account is not active.");
        }
        if (loan.account.currency !== loan.currency) {
            throw new Error("Loan currency does not match account currency.");
        }
        const lockedAccount = await tx.$queryRaw `
        SELECT
          "id",
          "balance",
          "status",
          "currency"
        FROM "Account"
        WHERE "id" = ${loan.accountId}
        FOR UPDATE
      `;
        const account = lockedAccount[0];
        if (!account) {
            throw new Error("Loan account not found.");
        }
        if (account.status !== "ACTIVE") {
            throw new Error("The customer's account is not active.");
        }
        const reference = `LN-${Date.now()}-${Math.random()
            .toString(36)
            .slice(2, 10)
            .toUpperCase()}`;
        const newBalance = Number(account.balance) + Number(loan.amount);
        const transaction = await tx.transaction.create({
            data: {
                reference,
                idempotencyKey,
                type: "LOAN_DISBURSEMENT",
                status: "COMPLETED",
                amount: loan.amount,
                currency: loan.currency,
                description: `Loan disbursement approved by admin ${adminId}.`,
                channel: "SYSTEM",
                recipientAccountId: loan.accountId,
                userId: loan.userId,
                metadata: {
                    source: "ADMIN",
                    adminId,
                    loanId: loan.id,
                },
            },
            select: {
                id: true,
                reference: true,
                status: true,
                amount: true,
                currency: true,
                createdAt: true,
            },
        });
        await tx.account.update({
            where: {
                id: loan.accountId,
            },
            data: {
                balance: {
                    increment: loan.amount,
                },
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
        const now = new Date();
        const dueDate = new Date(now);
        dueDate.setMonth(dueDate.getMonth() +
            (await tx.loan.findUnique({
                where: { id: loan.id },
                select: { termMonths: true },
            })).termMonths);
        await tx.loan.update({
            where: {
                id: loan.id,
            },
            data: {
                status: "ACTIVE",
                disbursedAt: now,
                dueDate,
            },
        });
        return transaction;
    }, {
        isolationLevel: "Serializable",
    });
}
//# sourceMappingURL=admin.loans.service.js.map