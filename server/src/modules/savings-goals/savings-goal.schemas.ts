import { z } from "zod";

export const createSavingsGoalSchema = z.object({
  accountId: z
    .string()
    .trim()
    .min(1, "Account ID is required."),

  name: z
    .string()
    .trim()
    .min(1, "Goal name is required.")
    .max(100, "Goal name must be 100 characters or fewer."),

  targetAmount: z.coerce
    .number()
    .finite()
    .positive("Target amount must be greater than zero."),

  targetDate: z
    .string()
    .datetime()
    .optional(),
});

export const updateSavingsGoalSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Goal name is required.")
    .max(100, "Goal name must be 100 characters or fewer.")
    .optional(),

  targetAmount: z.coerce
    .number()
    .finite()
    .positive("Target amount must be greater than zero.")
    .optional(),

  targetDate: z
    .string()
    .datetime()
    .nullable()
    .optional(),
});

export const updateSavingsGoalStatusSchema = z.object({
  status: z.enum([
    "ACTIVE",
    "PAUSED",
    "CANCELLED",
  ]),
});

export const savingsGoalListSchema = z.object({
  status: z
    .enum([
      "ACTIVE",
      "COMPLETED",
      "PAUSED",
      "CANCELLED",
    ])
    .optional(),

  page: z.coerce
    .number()
    .int()
    .min(1)
    .default(1),

  limit: z.coerce
    .number()
    .int()
    .min(1)
    .max(100)
    .default(20),
});