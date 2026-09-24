import { z } from "zod";
export declare const createTransferSchema: z.ZodObject<{
    fromAccountId: z.ZodString;
    toAccountNumber: z.ZodString;
    amount: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    idempotencyKey: z.ZodString;
}, z.core.$strip>;
export type CreateTransferInput = z.infer<typeof createTransferSchema>;
