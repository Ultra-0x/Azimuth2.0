import { z } from "zod";
export declare const createSavingsGoalSchema: z.ZodObject<{
    accountId: z.ZodString;
    name: z.ZodString;
    targetAmount: z.ZodCoercedNumber<unknown>;
    targetDate: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateSavingsGoalSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    targetAmount: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    targetDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const updateSavingsGoalStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        ACTIVE: "ACTIVE";
        CANCELLED: "CANCELLED";
        PAUSED: "PAUSED";
    }>;
}, z.core.$strip>;
export declare const savingsGoalListSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        CANCELLED: "CANCELLED";
        COMPLETED: "COMPLETED";
        PAUSED: "PAUSED";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
