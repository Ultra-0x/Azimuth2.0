import { Prisma } from "../../generated/prisma/client.js";
import type { CreateTransferInput } from "./transfer.schemas.js";
export declare class TransferError extends Error {
    readonly code: string;
    constructor(message: string, code?: string);
}
export declare function createTransfer(userId: string, input: CreateTransferInput): Promise<{
    transfer: {
        id: string;
        reference: string;
        idempotencyKey: string;
        userId: string;
        fromAccountId: string;
        toAccountId: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        currency: string;
        description: string | null;
        status: import("../../generated/prisma/enums.js").TransactionStatus;
        transactionId: string | null;
        createdAt: Date;
        updatedAt: Date;
    };
    transaction: null;
    replayed: boolean;
}>;
export declare function completeAuthenticatedTransfer(userId: string, transferId: string, challenge: string): Promise<{
    transfer: {
        id: string;
        userId: string;
        fromAccountId: string;
        toAccountId: string;
        amount: Prisma.Decimal;
        currency: string;
        description: string | null;
        reference: string;
        status: "COMPLETED";
        transactionId: string;
    };
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
    replayed: boolean;
}>;
