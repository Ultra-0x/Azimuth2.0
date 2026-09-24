export declare class CustomerError extends Error {
    readonly code: string;
    constructor(message: string, code: string);
}
export declare function getCustomerProfile(userId: string): Promise<{
    createdAt: Date;
    email: string;
    emailVerifiedAt: Date | null;
    firstName: string;
    id: string;
    lastName: string;
    phone: string | null;
    status: import("../../generated/prisma/enums.js").UserStatus;
    updatedAt: Date;
} | null>;
export declare function updateCustomerProfile(userId: string, data: {
    firstName?: string;
    lastName?: string;
    phone?: string | null;
}): Promise<{
    createdAt: Date;
    email: string;
    emailVerifiedAt: Date | null;
    firstName: string;
    id: string;
    lastName: string;
    phone: string | null;
    status: import("../../generated/prisma/enums.js").UserStatus;
    updatedAt: Date;
}>;
