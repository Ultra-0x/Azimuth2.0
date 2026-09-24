import { z } from "zod";

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
] as const;

const TRANSACTION_STATUSES = [
  "PENDING",
  "PROCESSING",
  "COMPLETED",
  "FAILED",
  "REVERSED",
  "CANCELLED",
] as const;

export const accountIdSchema = z.object({
  id: z.string().trim().min(1, "A valid account ID is required."),
});

export const transactionRequestSchema = z.object({
  id: z.string().trim().min(1, "A valid account ID is required."),
  transactionId: z
    .string()
    .trim()
    .min(1, "A valid transaction ID is required."),
});

export const transactionQuerySchema = z
  .object({
    page: z.coerce
      .number()
      .int()
      .min(1, "Page must be at least 1.")
      .default(1),

    limit: z.coerce
      .number()
      .int()
      .min(1, "Limit must be at least 1.")
      .max(100, "Limit cannot exceed 100.")
      .default(20),

    type: z
      .enum(TRANSACTION_TYPES)
      .optional(),

    status: z
      .enum(TRANSACTION_STATUSES)
      .optional(),

    from: z
      .string()
      .datetime({
        offset: true,
        message: "The 'from' date must be a valid ISO date.",
      })
      .optional(),

    to: z
      .string()
      .datetime({
        offset: true,
        message: "The 'to' date must be a valid ISO date.",
      })
      .optional(),
  })
  .refine(
    (data) =>
      !data.from ||
      !data.to ||
      new Date(data.from) <= new Date(data.to),
    {
      path: ["from"],
      message: "'from' date cannot be later than 'to' date.",
    },
  );

export type TransactionQuery = z.infer<
  typeof transactionQuerySchema
>;