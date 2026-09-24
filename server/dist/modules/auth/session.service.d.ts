export declare function createSession(userId: string, metadata?: {
    ipAddress?: string;
    userAgent?: string;
}): Promise<{
    token: string;
    sessionId: string;
    expiresAt: Date;
}>;
export declare function getSession(token: string): Promise<({
    user: {
        id: string;
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        phone: string | null;
        status: import("../../generated/prisma/enums.js").UserStatus;
        role: import("../../generated/prisma/enums.js").UserRole;
        emailVerifiedAt: Date | null;
        failedLoginAttempts: number;
        lockedUntil: Date | null;
        passwordChangedAt: Date | null;
        emailVerificationTokenHash: string | null;
        emailVerificationExpiresAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: string;
    userId: string;
    tokenHash: string;
    expiresAt: Date;
    revokedAt: Date | null;
    ipAddress: string | null;
    userAgent: string | null;
    createdAt: Date;
    updatedAt: Date;
}) | null>;
export declare function revokeSession(token: string): Promise<void>;
export declare function deleteExpiredSessions(): Promise<import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
