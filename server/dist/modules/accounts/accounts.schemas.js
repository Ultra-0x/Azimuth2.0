"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionQuerySchema = exports.transactionRequestSchema = exports.accountIdSchema = void 0;
const zod_1 = require("zod");
const TRANSACTION_TYPES = [
    "DEPOSIT",
    "WITHDRAWAL",
    "TRANSFER",
    "PAYMENT",
    "REFUND",
    "FEE",
    "INTEREST",
    "LOAN_DISBURSEMENT",
    "LOAN_REPAYMENT",
];
const TRANSACTION_STATUSES = [
    "PENDING",
    "PROCESSING",
    "COMPLETED",
    "FAILED",
    "REVERSED",
    "CANCELLED",
];
exports.accountIdSchema = zod_1.z.object({
    id: zod_1.z.string().trim().min(1, "A valid account ID is required."),
});
exports.transactionRequestSchema = zod_1.z.object({
    id: zod_1.z.string().trim().min(1, "A valid account ID is required."),
    transactionId: zod_1.z
        .string()
        .trim()
        .min(1, "A valid transaction ID is required."),
});
exports.transactionQuerySchema = zod_1.z
    .object({
    page: zod_1.z.coerce
        .number()
        .int()
        .min(1, "Page must be at least 1.")
        .default(1),
    limit: zod_1.z.coerce
        .number()
        .int()
        .min(1, "Limit must be at least 1.")
        .max(100, "Limit cannot exceed 100.")
        .default(20),
    type: zod_1.z
        .enum(TRANSACTION_TYPES)
        .optional(),
    status: zod_1.z
        .enum(TRANSACTION_STATUSES)
        .optional(),
    from: zod_1.z
        .string()
        .datetime({
        offset: true,
        message: "The 'from' date must be a valid ISO date.",
    })
        .optional(),
    to: zod_1.z
        .string()
        .datetime({
        offset: true,
        message: "The 'to' date must be a valid ISO date.",
    })
        .optional(),
})
    .refine((data) => !data.from ||
    !data.to ||
    new Date(data.from) <= new Date(data.to), {
    path: ["from"],
    message: "'from' date cannot be later than 'to' date.",
});
//# sourceMappingURL=accounts.schemas.js.map