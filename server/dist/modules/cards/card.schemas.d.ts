import { z } from "zod";
export declare const createCardSchema: z.ZodObject<{
    accountId: z.ZodString;
    type: z.ZodEnum<{
        PHYSICAL: "PHYSICAL";
        VIRTUAL: "VIRTUAL";
    }>;
}, z.core.$strip>;
export declare const updateCardStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        ACTIVE: "ACTIVE";
        BLOCKED: "BLOCKED";
        CANCELLED: "CANCELLED";
        FROZEN: "FROZEN";
    }>;
}, z.core.$strip>;
