import type { LoginInput, RegisterInput } from "./auth.schemas.js";
export declare function registerUser(input: RegisterInput): Promise<{
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string | null;
    status: import("../../generated/prisma/enums.js").UserStatus;
    emailVerified: boolean;
    createdAt: Date;
}>;
export declare function loginUser(input: LoginInput, metadata?: {
    ipAddress?: string;
    userAgent?: string;
}): Promise<{
    session: {
        token: string;
        sessionId: string;
        expiresAt: Date;
    };
    user: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        phone: string | null;
        status: "ACTIVE";
        emailVerifiedAt: Date;
        createdAt: Date;
    };
}>;
export declare function changePassword(userId: string, currentPassword: string, newPassword: string): Promise<void>;
export declare function verifyEmail(token: string): Promise<void>;
