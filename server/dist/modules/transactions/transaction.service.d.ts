import type { TransactionStatus, TransactionType } from "../../generated/prisma/client.js";
export interface CardTransactionFilters {
    type?: TransactionType;
    status?: TransactionStatus;
    from?: string;
    to?: string;
}
export interface TransactionFilters {
    type?: TransactionType;
    status?: TransactionStatus;
    from?: string;
    to?: string;
}
export declare function getTransactions(userId: string, page: number, limit: number, filters?: TransactionFilters): Promise<{
    transactions: {
        amount: import("@prisma/client-runtime-utils").Decimal;
        cardId: string | null;
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
}>;
export declare function getTransaction(userId: string, transactionId: string): Promise<{
    amount: import("@prisma/client-runtime-utils").Decimal;
    cardId: string | null;
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
    recipientAccountId: string | null;
    reference: string;
    senderAccountId: string | null;
    status: TransactionStatus;
    type: TransactionType;
    updatedAt: Date;
} | null>;
export declare function getCardTransactions(userId: string, cardId: string, page: number, limit: number, filters?: CardTransactionFilters): Promise<{
    transactions: {
        amount: import("@prisma/client-runtime-utils").Decimal;
        cardId: string | null;
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
export declare function getCardTransaction(userId: string, cardId: string, transactionId: string): Promise<{
    amount: import("@prisma/client-runtime-utils").Decimal;
    cardId: string | null;
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
    recipientAccountId: string | null;
    reference: string;
    senderAccountId: string | null;
    status: TransactionStatus;
    type: TransactionType;
    updatedAt: Date;
} | null>;
