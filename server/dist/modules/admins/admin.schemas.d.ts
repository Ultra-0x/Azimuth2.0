import { z } from "zod";
export declare const adminUserListSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        CLOSED: "CLOSED";
        LOCKED: "LOCKED";
        SUSPENDED: "SUSPENDED";
    }>>;
}, z.core.$strip>;
export declare const updateUserStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        ACTIVE: "ACTIVE";
        CLOSED: "CLOSED";
        LOCKED: "LOCKED";
        SUSPENDED: "SUSPENDED";
    }>;
}, z.core.$strip>;
