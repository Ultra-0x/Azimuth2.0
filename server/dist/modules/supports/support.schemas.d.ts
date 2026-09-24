import { z } from "zod";
export declare const createSupportTicketSchema: z.ZodObject<{
    subject: z.ZodString;
    category: z.ZodString;
    priority: z.ZodDefault<z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        URGENT: "URGENT";
    }>>;
    message: z.ZodString;
}, z.core.$strip>;
export declare const supportTicketListSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const addSupportMessageSchema: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
