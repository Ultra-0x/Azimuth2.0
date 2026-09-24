export declare function getAdminOverview(): Promise<{
    statistics: {
        users: number;
        activeUsers: number;
        accounts: number;
        activeAccounts: number;
        loans: number;
        pendingLoans: number;
        openTickets: number;
    };
    recentTransactions: {
        amount: import("@prisma/client-runtime-utils").Decimal;
        channel: import("../../generated/prisma/enums.js").TransactionChannel;
        createdAt: Date;
        currency: string;
        id: string;
        reference: string;
        status: import("../../generated/prisma/enums.js").TransactionStatus;
        type: import("../../generated/prisma/enums.js").TransactionType;
    }[];
}>;
