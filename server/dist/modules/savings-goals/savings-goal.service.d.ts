import { type SavingsGoalStatus } from "../../generated/prisma/client.js";
export interface SavingsGoalListFilters {
    status?: SavingsGoalStatus;
}
export declare function createSavingsGoal(userId: string, accountId: string, name: string, targetAmount: number, targetDate?: string): Promise<{
    accountId: string;
    createdAt: Date;
    currency: string;
    currentAmount: import("@prisma/client-runtime-utils").Decimal;
    id: string;
    name: string;
    status: SavingsGoalStatus;
    targetAmount: import("@prisma/client-runtime-utils").Decimal;
    targetDate: Date | null;
    updatedAt: Date;
}>;
export declare function getSavingsGoals(userId: string, page: number, limit: number, filters?: SavingsGoalListFilters): Promise<{
    goals: {
        accountId: string;
        createdAt: Date;
        currency: string;
        currentAmount: import("@prisma/client-runtime-utils").Decimal;
        id: string;
        name: string;
        status: SavingsGoalStatus;
        targetAmount: import("@prisma/client-runtime-utils").Decimal;
        targetDate: Date | null;
        updatedAt: Date;
    }[];
    total: number;
}>;
export declare function getSavingsGoal(userId: string, goalId: string): Promise<{
    accountId: string;
    createdAt: Date;
    currency: string;
    currentAmount: import("@prisma/client-runtime-utils").Decimal;
    id: string;
    name: string;
    status: SavingsGoalStatus;
    targetAmount: import("@prisma/client-runtime-utils").Decimal;
    targetDate: Date | null;
    updatedAt: Date;
} | null>;
export declare function updateSavingsGoal(userId: string, goalId: string, data: {
    name?: string;
    targetAmount?: number;
    targetDate?: string | null;
}): Promise<{
    accountId: string;
    createdAt: Date;
    currency: string;
    currentAmount: import("@prisma/client-runtime-utils").Decimal;
    id: string;
    name: string;
    status: SavingsGoalStatus;
    targetAmount: import("@prisma/client-runtime-utils").Decimal;
    targetDate: Date | null;
    updatedAt: Date;
}>;
export declare function updateSavingsGoalStatus(userId: string, goalId: string, status: Extract<SavingsGoalStatus, "ACTIVE" | "PAUSED" | "CANCELLED">): Promise<{
    accountId: string;
    createdAt: Date;
    currency: string;
    currentAmount: import("@prisma/client-runtime-utils").Decimal;
    id: string;
    name: string;
    status: SavingsGoalStatus;
    targetAmount: import("@prisma/client-runtime-utils").Decimal;
    targetDate: Date | null;
    updatedAt: Date;
}>;
export declare function contributeToSavingsGoal(userId: string, goalId: string, sourceAccountId: string, amount: number, idempotencyKey: string): Promise<{
    transactionId: string;
    contribution: {
        amount: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        currency: string;
        goalId: string;
        id: string;
    };
    idempotent: boolean;
    transaction?: never;
    goal?: never;
} | {
    transactionId?: never;
    transaction: {
        amount: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        currency: string;
        id: string;
        reference: string;
        status: import("../../generated/prisma/enums.js").TransactionStatus;
    };
    contribution: {
        amount: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        currency: string;
        goalId: string;
        id: string;
        transactionId: string;
    };
    goal: {
        accountId: string;
        createdAt: Date;
        currency: string;
        currentAmount: import("@prisma/client-runtime-utils").Decimal;
        id: string;
        name: string;
        status: SavingsGoalStatus;
        targetAmount: import("@prisma/client-runtime-utils").Decimal;
        targetDate: Date | null;
        updatedAt: Date;
    };
    idempotent: boolean;
}>;
