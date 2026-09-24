"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loanDisbursementSchema = exports.loanRepaymentSchema = exports.updateLoanStatusSchema = exports.loanListSchema = exports.createLoanSchema = void 0;
const zod_1 = require("zod");
exports.createLoanSchema = zod_1.z.object({
    accountId: zod_1.z
        .string()
        .trim()
        .min(1, "Account ID is required."),
    amount: zod_1.z.coerce
        .number()
        .finite()
        .positive("Loan amount must be greater than zero."),
    interestRate: zod_1.z.coerce
        .number()
        .finite()
        .min(0, "Interest rate cannot be negative.")
        .max(100, "Interest rate cannot exceed 100%."),
    termMonths: zod_1.z.coerce
        .number()
        .int()
        .min(1, "Loan term must be at least 1 month.")
        .max(120, "Loan term cannot exceed 120 months."),
    purpose: zod_1.z
        .string()
        .trim()
        .max(500, "Loan purpose must be 500 characters or fewer.")
        .optional(),
});
exports.loanListSchema = zod_1.z.object({
    status: zod_1.z
        .enum([
        "PENDING",
        "APPROVED",
        "ACTIVE",
        "PAID",
        "REJECTED",
        "DEFAULTED",
        "CANCELLED",
    ])
        .optional(),
    page: zod_1.z.coerce
        .number()
        .int()
        .min(1)
        .default(1),
    limit: zod_1.z.coerce
        .number()
        .int()
        .min(1)
        .max(100)
        .default(20),
});
exports.updateLoanStatusSchema = zod_1.z.object({
    status: zod_1.z.enum([
        "APPROVED",
        "REJECTED",
        "CANCELLED",
        "DEFAULTED",
    ]),
});
exports.loanRepaymentSchema = zod_1.z.object({
    sourceAccountId: zod_1.z
        .string()
        .trim()
        .min(1, "Source account ID is required."),
    amount: zod_1.z.coerce
        .number()
        .finite()
        .positive("Repayment amount must be greater than zero."),
});
exports.loanDisbursementSchema = zod_1.z.object({
    idempotencyKey: zod_1.z
        .string()
        .trim()
        .min(1, "Idempotency key is required.")
        .max(200, "Idempotency key is too long."),
});
//# sourceMappingURL=loan.schemas.js.map