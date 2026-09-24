"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransferSchema = void 0;
const zod_1 = require("zod");
exports.createTransferSchema = zod_1.z.object({
    fromAccountId: zod_1.z.string().trim().min(1),
    toAccountNumber: zod_1.z
        .string()
        .trim()
        .min(1)
        .max(64),
    amount: zod_1.z
        .string()
        .trim()
        .regex(/^\d+(\.\d{1,4})?$/, "Amount must be a valid monetary value.")
        .refine((value) => Number(value) > 0, {
        message: "Amount must be greater than zero.",
    }),
    description: zod_1.z
        .string()
        .trim()
        .max(200)
        .optional(),
    idempotencyKey: zod_1.z
        .string()
        .trim()
        .min(16)
        .max(128),
});
//# sourceMappingURL=transfer.schemas.js.map