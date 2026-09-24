import { z } from "zod";
export declare const createLoanSchema: z.ZodObject<{
    accountId: z.ZodString;
    amount: z.ZodCoercedNumber<unknown>;
    interestRate: z.ZodCoercedNumber<unknown>;
    termMonths: z.ZodCoercedNumber<unknown>;
    purpose: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const loanListSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        APPROVED: "APPROVED";
        CANCELLED: "CANCELLED";
        DEFAULTED: "DEFAULTED";
        PAID: "PAID";
        PENDING: "PENDING";
        REJECTED: "REJECTED";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const updateLoanStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        APPROVED: "APPROVED";
        CANCELLED: "CANCELLED";
        DEFAULTED: "DEFAULTED";
        REJECTED: "REJECTED";
    }>;
}, z.core.$strip>;
export declare const loanRepaymentSchema: z.ZodObject<{
    sourceAccountId: z.ZodString;
    amount: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export declare const loanDisbursementSchema: z.ZodObject<{
    idempotencyKey: z.ZodString;
}, z.core.$strip>;
