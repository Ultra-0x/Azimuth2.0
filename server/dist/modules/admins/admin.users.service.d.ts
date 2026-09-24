export declare function getAdminUsers(page: number, limit: number, status?: "ACTIVE" | "SUSPENDED" | "LOCKED" | "CLOSED"): Promise<{
    users: {
        accounts: {
            accountNumber: string;
            balance: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
            id: string;
            status: import("../../generated/prisma/enums.js").AccountStatus;
            type: import("../../generated/prisma/enums.js").AccountType;
        }[];
        createdAt: Date;
        email: string;
        emailVerifiedAt: Date | null;
        firstName: string;
        id: string;
        lastName: string;
        phone: string | null;
        role: import("../../generated/prisma/enums.js").UserRole;
        status: import("../../generated/prisma/enums.js").UserStatus;
        updatedAt: Date;
    }[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
export declare function updateAdminUserStatus(userId: string, status: "ACTIVE" | "SUSPENDED" | "LOCKED" | "CLOSED"): Promise<{
    accounts: {
        accountNumber: string;
        balance: import("@prisma/client-runtime-utils").Decimal;
        currency: string;
        id: string;
        status: import("../../generated/prisma/enums.js").AccountStatus;
        type: import("../../generated/prisma/enums.js").AccountType;
    }[];
    createdAt: Date;
    email: string;
    emailVerifiedAt: Date | null;
    firstName: string;
    id: string;
    lastName: string;
    phone: string | null;
    role: import("../../generated/prisma/enums.js").UserRole;
    status: import("../../generated/prisma/enums.js").UserStatus;
    updatedAt: Date;
}>;
