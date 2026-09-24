export declare function getAdminAccounts(page: number, limit: number, status?: "ACTIVE" | "SUSPENDED" | "CLOSED"): Promise<{
    accounts: {
        accountNumber: string;
        balance: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        currency: string;
        id: string;
        status: import("../../generated/prisma/enums.js").AccountStatus;
        type: import("../../generated/prisma/enums.js").AccountType;
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
export declare function getAdminAccount(accountId: string): Promise<{
    accountNumber: string;
    balance: import("@prisma/client-runtime-utils").Decimal;
    createdAt: Date;
    currency: string;
    id: string;
    status: import("../../generated/prisma/enums.js").AccountStatus;
    type: import("../../generated/prisma/enums.js").AccountType;
    updatedAt: Date;
    user: {
        email: string;
        firstName: string;
        id: string;
        lastName: string;
    };
    userId: string;
} | null>;
