"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionChallengeSchema = exports.transactionAuthSchema = exports.verifyEmailSchema = exports.changePasswordSchema = exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    email: zod_1.z.string().trim().email(),
    password: zod_1.z.string().min(8).max(128),
    firstName: zod_1.z.string().trim().min(2).max(50),
    lastName: zod_1.z.string().trim().min(2).max(50),
    phone: zod_1.z.string().trim().min(7).max(20).optional(),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().trim().email(),
    password: zod_1.z.string().min(1).max(128),
});
exports.changePasswordSchema = zod_1.z
    .object({
    currentPassword: zod_1.z.string().min(1).max(128),
    newPassword: zod_1.z.string().min(8).max(128),
})
    .refine((data) => data.currentPassword !== data.newPassword, {
    message: "New password must be different from current password.",
    path: ["newPassword"],
});
exports.verifyEmailSchema = zod_1.z.object({
    token: zod_1.z.string().trim().min(32),
});
exports.transactionAuthSchema = zod_1.z.object({
    transferId: zod_1.z.string().trim().min(1),
    password: zod_1.z.string().min(1).max(128),
});
exports.transactionChallengeSchema = zod_1.z.object({
    transferId: zod_1.z.string().trim().min(1),
    challenge: zod_1.z.string().min(32),
});
//# sourceMappingURL=auth.schemas.js.map