import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8).max(128),
  firstName: z.string().trim().min(2).max(50),
  lastName: z.string().trim().min(2).max(50),
  phone: z.string().trim().min(7).max(20).optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1).max(128),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1).max(128),
    newPassword: z.string().min(8).max(128),
  })
  .refine(
    (data) => data.currentPassword !== data.newPassword,
    {
      message: "New password must be different from current password.",
      path: ["newPassword"],
    },
  );

export type ChangePasswordInput = z.infer<
  typeof changePasswordSchema
>;

export const verifyEmailSchema = z.object({
  token: z.string().trim().min(32),
});

export const transactionAuthSchema = z.object({
  transferId: z.string().trim().min(1),
  password: z.string().min(1).max(128),
});

export const transactionChallengeSchema = z.object({
  transferId: z.string().trim().min(1),
  challenge: z.string().min(32),
});