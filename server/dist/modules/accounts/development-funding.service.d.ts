export declare function developmentFundAccount(accountId: string, amountInput: string, description?: string): Promise<{
    transaction: {
        id: string;
        reference: string;
        idempotencyKey: string | null;
        type: import("../../generated/prisma/enums.js").TransactionType;
        status: import("../../generated/prisma/enums.js").TransactionStatus;
        amount: import("@prisma/client-runtime-utils").Decimal;
        currency: string;
        description: string | null;
        channel: import("../../generated/prisma/enums.js").TransactionChannel;
        cardId: string | null;
        senderAccountId: string | null;
        recipientAccountId: string | null;
        userId: string | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    };
    balanceBefore: import("@prisma/client-runtime-utils").Decimal;
    balanceAfter: import("@prisma/client-runtime-utils").Decimal;
}>;
