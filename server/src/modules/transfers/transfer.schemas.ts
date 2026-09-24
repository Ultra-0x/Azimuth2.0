import { z } from "zod";

export const createTransferSchema = z.object({
  fromAccountId: z.string().trim().min(1),

  toAccountNumber: z
    .string()
    .trim()
    .min(1)
    .max(64),

  amount: z
    .string()
    .trim()
    .regex(
      /^\d+(\.\d{1,4})?$/,
      "Amount must be a valid monetary value.",
    )
    .refine((value) => Number(value) > 0, {
      message: "Amount must be greater than zero.",
    }),

  description: z
    .string()
    .trim()
    .max(200)
    .optional(),

  idempotencyKey: z
    .string()
    .trim()
    .min(16)
    .max(128),
});

export type CreateTransferInput = z.infer<
  typeof createTransferSchema
>;
