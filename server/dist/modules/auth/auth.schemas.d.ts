import { z } from "zod";
export declare const registerSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type RegisterInput = z.infer<typeof registerSchema>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginInput = z.infer<typeof loginSchema>;
export declare const changePasswordSchema: z.ZodObject<{
    currentPassword: z.ZodString;
    newPassword: z.ZodString;
}, z.core.$strip>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export declare const verifyEmailSchema: z.ZodObject<{
    token: z.ZodString;
}, z.core.$strip>;
export declare const transactionAuthSchema: z.ZodObject<{
    transferId: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const transactionChallengeSchema: z.ZodObject<{
    transferId: z.ZodString;
    challenge: z.ZodString;
}, z.core.$strip>;
