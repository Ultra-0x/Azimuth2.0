import type { TransactionStatus, TransactionType } from "../../generated/prisma/client.js";
export interface TransactionFilters {
    type?: TransactionType;
    status?: TransactionStatus;
    from?: string;
    to?: string;
}
export declare function getUserAccounts(userId: string): Promise<{
    accountNumber: string;
    balance: import("@prisma/client-runtime-utils").Decimal;
    createdAt: Date;
    currency: string;
    id: string;
    status: import("../../generated/prisma/enums.js").AccountStatus;
    type: import("../../generated/prisma/enums.js").AccountType;
    updatedAt: Date;
}[]>;
export declare function getUserAccount(userId: string, accountId: string): Promise<{
    accountNumber: string;
    balance: import("@prisma/client-runtime-utils").Decimal;
    createdAt: Date;
    currency: string;
    id: string;
    status: import("../../generated/prisma/enums.js").AccountStatus;
    type: import("../../generated/prisma/enums.js").AccountType;
    updatedAt: Date;
} | null>;
export declare function getAccountTransactions(userId: string, accountId: string, page: number, limit: number, filters?: TransactionFilters): Promise<{
    transactions: {
        amount: import("@prisma/client-runtime-utils").Decimal;
        channel: import("../../generated/prisma/enums.js").TransactionChannel;
        createdAt: Date;
        currency: string;
        description: string | null;
        id: string;
        recipientAccountId: string | null;
        reference: string;
        senderAccountId: string | null;
        status: TransactionStatus;
        type: TransactionType;
        updatedAt: Date;
    }[];
    total: number;
} | null>;
export declare function getAccountTransaction(userId: string, accountId: string, transactionId: string): Promise<{
    amount: import("@prisma/client-runtime-utils").Decimal;
    channel: import("../../generated/prisma/enums.js").TransactionChannel;
    createdAt: Date;
    currency: string;
    description: string | null;
    id: string;
    ledgerEntries: {
        accountId: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        balanceAfter: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        currency: string;
        direction: import("../../generated/prisma/enums.js").LedgerEntryDirection;
        id: string;
    }[];
    metadata: import("@prisma/client/runtime/client").JsonValue;
    recipientAccountId: string | null;
    reference: string;
    senderAccountId: string | null;
    status: TransactionStatus;
    type: TransactionType;
    updatedAt: Date;
    userId: string | null;
} | null>;
