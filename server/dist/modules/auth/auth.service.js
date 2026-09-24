"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.changePassword = changePassword;
exports.verifyEmail = verifyEmail;
const argon2_1 = __importDefault(require("argon2"));
const node_crypto_1 = require("node:crypto");
const prisma_js_1 = require("../../database/prisma.js");
const session_service_js_1 = require("./session.service.js");
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000;
const EMAIL_VERIFICATION_DURATION_MS = 24 * 60 * 60 * 1000;
function generateAccountNumber() {
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(1000 + Math.random() * 9000);
    return `${timestamp}${random}`;
}
function hashToken(token) {
    return (0, node_crypto_1.createHash)("sha256").update(token).digest("hex");
}
function generateVerificationToken() {
    const token = (0, node_crypto_1.randomBytes)(32).toString("hex");
    return {
        token,
        tokenHash: hashToken(token),
    };
}
async function registerUser(input) {
    const email = input.email.toLowerCase();
    const existingUser = await prisma_js_1.prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new Error("An account with this email already exists.");
    }
    const passwordHash = await argon2_1.default.hash(input.password);
    const verification = generateVerificationToken();
    const user = await prisma_js_1.prisma.$transaction(async (tx) => {
        const createdUser = await tx.user.create({
            data: {
                email,
                passwordHash,
                firstName: input.firstName,
                lastName: input.lastName,
                phone: input.phone ?? null,
                emailVerificationTokenHash: verification.tokenHash,
                emailVerificationExpiresAt: new Date(Date.now() + EMAIL_VERIFICATION_DURATION_MS),
                passwordChangedAt: new Date(),
            },
        });
        await tx.account.create({
            data: {
                userId: createdUser.id,
                accountNumber: generateAccountNumber(),
                type: "SAVINGS",
                currency: "USD",
                balance: 0,
            },
        });
        return createdUser;
    });
    /*
     * Development only:
     * In production this token should be delivered through an email provider.
     */
    if (process.env.NODE_ENV !== "production") {
        console.log(`[DEV] Email verification token for ${user.email}: ${verification.token}`);
    }
    return {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        status: user.status,
        emailVerified: false,
        createdAt: user.createdAt,
    };
}
async function loginUser(input, metadata) {
    const email = input.email.toLowerCase();
    const user = await prisma_js_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new Error("Invalid email or password.");
    }
    if (user.status !== "ACTIVE") {
        throw new Error("This account is not available for login.");
    }
    if (!user.emailVerifiedAt) {
        throw new Error("Email verification is required before login.");
    }
    if (user.lockedUntil && user.lockedUntil > new Date()) {
        throw new Error("Too many failed login attempts. Please try again later.");
    }
    if (user.lockedUntil && user.lockedUntil <= new Date()) {
        await prisma_js_1.prisma.user.update({
            where: { id: user.id },
            data: {
                failedLoginAttempts: 0,
                lockedUntil: null,
            },
        });
    }
    const passwordValid = await argon2_1.default.verify(user.passwordHash, input.password);
    if (!passwordValid) {
        const failedAttempts = user.failedLoginAttempts + 1;
        const shouldLock = failedAttempts >= MAX_FAILED_ATTEMPTS;
        await prisma_js_1.prisma.user.update({
            where: { id: user.id },
            data: {
                failedLoginAttempts: shouldLock ? 0 : failedAttempts,
                lockedUntil: shouldLock
                    ? new Date(Date.now() + LOCKOUT_DURATION_MS)
                    : null,
            },
        });
        throw new Error("Invalid email or password.");
    }
    const session = await (0, session_service_js_1.createSession)(user.id, metadata);
    await prisma_js_1.prisma.user.update({
        where: { id: user.id },
        data: {
            failedLoginAttempts: 0,
            lockedUntil: null,
        },
    });
    return {
        session,
        user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            status: user.status,
            emailVerifiedAt: user.emailVerifiedAt,
            createdAt: user.createdAt,
        },
    };
}
async function changePassword(userId, currentPassword, newPassword) {
    const user = await prisma_js_1.prisma.user.findUnique({
        where: { id: userId },
    });
    if (!user) {
        throw new Error("User not found.");
    }
    const valid = await argon2_1.default.verify(user.passwordHash, currentPassword);
    if (!valid) {
        throw new Error("Current password is incorrect.");
    }
    if (currentPassword === newPassword) {
        throw new Error("New password must be different from your current password.");
    }
    const passwordHash = await argon2_1.default.hash(newPassword);
    await prisma_js_1.prisma.$transaction(async (tx) => {
        await tx.user.update({
            where: { id: userId },
            data: {
                passwordHash,
                passwordChangedAt: new Date(),
            },
        });
        /*
         * Password changes invalidate all existing sessions.
         * The current session will be recreated by the controller.
         */
        await tx.session.updateMany({
            where: {
                userId,
                revokedAt: null,
            },
            data: {
                revokedAt: new Date(),
            },
        });
    });
}
async function verifyEmail(token) {
    const tokenHash = hashToken(token);
    const user = await prisma_js_1.prisma.user.findUnique({
        where: {
            emailVerificationTokenHash: tokenHash,
        },
    });
    if (!user) {
        throw new Error("Invalid or expired verification token.");
    }
    if (!user.emailVerificationExpiresAt ||
        user.emailVerificationExpiresAt <= new Date()) {
        throw new Error("Invalid or expired verification token.");
    }
    await prisma_js_1.prisma.user.update({
        where: { id: user.id },
        data: {
            emailVerifiedAt: new Date(),
            emailVerificationTokenHash: null,
            emailVerificationExpiresAt: null,
        },
    });
}
//# sourceMappingURL=auth.service.js.map