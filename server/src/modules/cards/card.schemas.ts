import { z } from "zod";

export const createCardSchema = z.object({
  accountId: z
    .string()
    .trim()
    .min(1, "Account ID is required."),

  type: z.enum(["VIRTUAL", "PHYSICAL"]),
});

export const updateCardStatusSchema = z.object({
  status: z.enum([
    "ACTIVE",
    "FROZEN",
    "BLOCKED",
    "CANCELLED",
  ]),
});