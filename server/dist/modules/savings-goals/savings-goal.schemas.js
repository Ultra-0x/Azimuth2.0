"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.savingsGoalListSchema = exports.updateSavingsGoalStatusSchema = exports.updateSavingsGoalSchema = exports.createSavingsGoalSchema = void 0;
const zod_1 = require("zod");
exports.createSavingsGoalSchema = zod_1.z.object({
    accountId: zod_1.z
        .string()
        .trim()
        .min(1, "Account ID is required."),
    name: zod_1.z
        .string()
        .trim()
        .min(1, "Goal name is required.")
        .max(100, "Goal name must be 100 characters or fewer."),
    targetAmount: zod_1.z.coerce
        .number()
        .finite()
        .positive("Target amount must be greater than zero."),
    targetDate: zod_1.z
        .string()
        .datetime()
        .optional(),
});
exports.updateSavingsGoalSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .trim()
        .min(1, "Goal name is required.")
        .max(100, "Goal name must be 100 characters or fewer.")
        .optional(),
    targetAmount: zod_1.z.coerce
        .number()
        .finite()
        .positive("Target amount must be greater than zero.")
        .optional(),
    targetDate: zod_1.z
        .string()
        .datetime()
        .nullable()
        .optional(),
});
exports.updateSavingsGoalStatusSchema = zod_1.z.object({
    status: zod_1.z.enum([
        "ACTIVE",
        "PAUSED",
        "CANCELLED",
    ]),
});
exports.savingsGoalListSchema = zod_1.z.object({
    status: zod_1.z
        .enum([
        "ACTIVE",
        "COMPLETED",
        "PAUSED",
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
//# sourceMappingURL=savings-goal.schemas.js.map