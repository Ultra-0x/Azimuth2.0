import { z } from "zod";

export const transactionFiltersSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),

  type: z
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

  status: z
    .enum([
      "PENDING",
      "PROCESSING",
      "COMPLETED",
      "FAILED",
      "REVERSED",
      "CANCELLED",
    ])
    .optional(),

  from: z.string().datetime().optional(),
  to: z.string().datetime().optional(),
});