export declare function getAdminLoans(page: number, limit: number, status?: "PENDING" | "APPROVED" | "ACTIVE" | "PAID" | "REJECTED" | "DEFAULTED" | "CANCELLED"): Promise<{
    loans: {
        account: {
            accountNumber: string;
            currency: string;
            id: string;
            status: import("../../generated/prisma/enums.js").AccountStatus;
        };
        accountId: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        amountRepaid: import("@prisma/client-runtime-utils").Decimal;
        approvedAt: Date | null;
        createdAt: Date;
        currency: string;
        disbursedAt: Date | null;
        dueDate: Date | null;
        id: string;
        interestRate: import("@prisma/client-runtime-utils").Decimal;
        purpose: string | null;
        status: import("../../generated/prisma/enums.js").LoanStatus;
        termMonths: number;
        totalRepayment: import("@prisma/client-runtime-utils").Decimal;
        updatedAt: Date;
        user: {
            email: string;
            firstName: string;
            id: string;
            lastName: string;
        };
        userId: string;
    }[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
export declare function getAdminLoan(loanId: string): Promise<{
    account: {
        accountNumber: string;
        currency: string;
        id: string;
        status: import("../../generated/prisma/enums.js").AccountStatus;
    };
    accountId: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    amountRepaid: import("@prisma/client-runtime-utils").Decimal;
    approvedAt: Date | null;
    createdAt: Date;
    currency: string;
    disbursedAt: Date | null;
    dueDate: Date | null;
    id: string;
    interestRate: import("@prisma/client-runtime-utils").Decimal;
    purpose: string | null;
    status: import("../../generated/prisma/enums.js").LoanStatus;
    termMonths: number;
    totalRepayment: import("@prisma/client-runtime-utils").Decimal;
    updatedAt: Date;
    user: {
        email: string;
        firstName: string;
        id: string;
        lastName: string;
    };
    userId: string;
} | null>;
export declare function updateAdminLoanStatus(loanId: string, status: "APPROVED" | "REJECTED"): Promise<{
    account: {
        accountNumber: string;
        currency: string;
        id: string;
        status: import("../../generated/prisma/enums.js").AccountStatus;
    };
    accountId: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    amountRepaid: import("@prisma/client-runtime-utils").Decimal;
    approvedAt: Date | null;
    createdAt: Date;
    currency: string;
    disbursedAt: Date | null;
    dueDate: Date | null;
    id: string;
    interestRate: import("@prisma/client-runtime-utils").Decimal;
    purpose: string | null;
    status: import("../../generated/prisma/enums.js").LoanStatus;
    termMonths: number;
    totalRepayment: import("@prisma/client-runtime-utils").Decimal;
    updatedAt: Date;
    user: {
        email: string;
        firstName: string;
        id: string;
        lastName: string;
    };
    userId: string;
}>;
export declare function disburseAdminLoan(loanId: string, adminId: string, idempotencyKey: string): Promise<{
    id: string;
    reference: string;
    status: import("../../generated/prisma/enums.js").TransactionStatus;
}>;
