import { z } from "zod";
export declare const accountIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const transactionRequestSchema: z.ZodObject<{
    id: z.ZodString;
    transactionId: z.ZodString;
}, z.core.$strip>;
export declare const transactionQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    type: z.ZodOptional<z.ZodEnum<{
        DEPOSIT: "DEPOSIT";
        FEE: "FEE";
        INTEREST: "INTEREST";
        LOAN_DISBURSEMENT: "LOAN_DISBURSEMENT";
        LOAN_REPAYMENT: "LOAN_REPAYMENT";
        PAYMENT: "PAYMENT";
        REFUND: "REFUND";
        TRANSFER: "TRANSFER";
        WITHDRAWAL: "WITHDRAWAL";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        CANCELLED: "CANCELLED";
        COMPLETED: "COMPLETED";
        FAILED: "FAILED";
        PENDING: "PENDING";
        PROCESSING: "PROCESSING";
        REVERSED: "REVERSED";
    }>>;
    from: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type TransactionQuery = z.infer<typeof transactionQuerySchema>;
