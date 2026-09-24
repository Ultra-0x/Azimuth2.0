import { z } from "zod";

export const adminUserListSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: z
    .enum([
      "ACTIVE",
      "SUSPENDED",
      "LOCKED",
      "CLOSED",
    ])
    .optional(),
});

export const updateUserStatusSchema = z.object({
  status: z.enum([
    "ACTIVE",
    "SUSPENDED",
    "LOCKED",
    "CLOSED",
  ]),
});