"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionFiltersSchema = void 0;
const zod_1 = require("zod");
exports.transactionFiltersSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().min(1).default(1),
    limit: zod_1.z.coerce.number().int().min(1).max(100).default(20),
    type: zod_1.z
        .enum([
        "DEPOSIT",
        "WITHDRAWAL",
        "TRANSFER",
        "PAYMENT",
        "REFUND",
        "FEE",
        "INTEREST",
        "LOAN_DISBURSEMENT",
        "LOAN_REPAYMENT",
    ])
        .optional(),
    status: zod_1.z
        .enum([
        "PENDING",
        "PROCESSING",
        "COMPLETED",
        "FAILED",
        "REVERSED",
        "CANCELLED",
    ])
        .optional(),
    from: zod_1.z.string().datetime().optional(),
    to: zod_1.z.string().datetime().optional(),
});
//# sourceMappingURL=transaction.schemas.js.map