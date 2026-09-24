export declare function createTransactionAuthChallenge(userId: string, transferId: string, password: string): Promise<{
    challenge: string;
    expiresAt: Date;
}>;
export declare function deleteExpiredTransactionAuthChallenges(): Promise<import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
