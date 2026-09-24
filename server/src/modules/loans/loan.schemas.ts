import { z } from "zod";

export const createLoanSchema = z.object({
  accountId: z
    .string()
    .trim()
    .min(1, "Account ID is required."),

  amount: z.coerce
    .number()
    .finite()
    .positive("Loan amount must be greater than zero."),

  interestRate: z.coerce
    .number()
    .finite()
    .min(0, "Interest rate cannot be negative.")
    .max(100, "Interest rate cannot exceed 100%."),

  termMonths: z.coerce
    .number()
    .int()
    .min(1, "Loan term must be at least 1 month.")
    .max(120, "Loan term cannot exceed 120 months."),

  purpose: z
    .string()
    .trim()
    .max(500, "Loan purpose must be 500 characters or fewer.")
    .optional(),
});

export const loanListSchema = z.object({
  status: z
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

export const updateLoanStatusSchema = z.object({
  status: z.enum([
    "APPROVED",
    "REJECTED",
    "CANCELLED",
    "DEFAULTED",
  ]),
});

export const loanRepaymentSchema = z.object({
  sourceAccountId: z
    .string()
    .trim()
    .min(1, "Source account ID is required."),

  amount: z.coerce
    .number()
    .finite()
    .positive("Repayment amount must be greater than zero."),
});

export const loanDisbursementSchema = z.object({
  idempotencyKey: z
    .string()
    .trim()
    .min(1, "Idempotency key is required.")
    .max(200, "Idempotency key is too long."),
});