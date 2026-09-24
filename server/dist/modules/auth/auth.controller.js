"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
exports.getCurrentUser = getCurrentUser;
exports.logout = logout;
exports.changePasswordController = changePasswordController;
exports.verifyEmailController = verifyEmailController;
exports.createTransactionAuthController = createTransactionAuthController;
const session_service_js_1 = require("./session.service.js");
const env_js_1 = require("../../config/env.js");
const auth_service_js_1 = require("./auth.service.js");
const auth_schemas_js_1 = require("./auth.schemas.js");
const transaction_auth_service_js_1 = require("./transaction-auth.service.js");
async function register(req, res) {
    const result = auth_schemas_js_1.registerSchema.safeParse(req.body);
    if (!result.success) {
        res.status(400).json({
            error: "VALIDATION_ERROR",
            message: "Please check the information you provided.",
            details: result.error.flatten().fieldErrors,
        });
        return;
    }
    try {
        const user = await (0, auth_service_js_1.registerUser)(result.data);
        res.status(201).json({
            message: "Account created successfully.",
            user,
        });
    }
    catch (error) {
        if (error instanceof Error &&
            error.message ===
                "An account with this email already exists.") {
            res.status(409).json({
                error: "EMAIL_ALREADY_EXISTS",
                message: error.message,
            });
            return;
        }
        console.error("Registration error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong while creating your account.",
        });
    }
}
async function login(req, res) {
    const validation = auth_schemas_js_1.loginSchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json({
            error: "VALIDATION_ERROR",
            message: "Please check your email and password.",
            details: validation.error.flatten().fieldErrors,
        });
        return;
    }
    try {
        const sessionMetadata = {};
        if (req.ip) {
            sessionMetadata.ipAddress = req.ip;
        }
        const userAgent = req.get("user-agent");
        if (userAgent) {
            sessionMetadata.userAgent = userAgent;
        }
        const loginResult = await (0, auth_service_js_1.loginUser)(validation.data, sessionMetadata);
        const isProduction = env_js_1.env.NODE_ENV === "production";
        res.cookie("azimuth_session", loginResult.session.token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: "lax",
            path: "/",
            maxAge: 1000 * 60 * 60 * 24 * 7,
        });
        res.status(200).json({
            message: "Login successful.",
            user: loginResult.user,
        });
    }
    catch (error) {
        if (error instanceof Error &&
            error.message ===
                "Invalid email or password.") {
            res.status(401).json({
                error: "INVALID_CREDENTIALS",
                message: "Invalid email or password.",
            });
            return;
        }
        if (error instanceof Error &&
            error.message ===
                "This account is not available for login.") {
            res.status(403).json({
                error: "ACCOUNT_UNAVAILABLE",
                message: error.message,
            });
            return;
        }
        if (error instanceof Error &&
            error.message ===
                "Email verification is required before login.") {
            res.status(403).json({
                error: "EMAIL_NOT_VERIFIED",
                message: "Please verify your email address before signing in.",
            });
            return;
        }
        if (error instanceof Error &&
            error.message ===
                "Too many failed login attempts. Please try again later.") {
            res.status(429).json({
                error: "ACCOUNT_TEMPORARILY_LOCKED",
                message: error.message,
            });
            return;
        }
        console.error("Login error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong while signing you in.",
        });
    }
}
async function getCurrentUser(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    res.status(200).json({
        user: req.user,
    });
}
async function logout(req, res) {
    const token = req.cookies?.azimuth_session;
    if (token) {
        await (0, session_service_js_1.revokeSession)(token);
    }
    res.clearCookie("azimuth_session", {
        httpOnly: true,
        secure: env_js_1.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    });
    res.status(200).json({
        message: "Logout successful.",
    });
}
async function changePasswordController(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    const validation = auth_schemas_js_1.changePasswordSchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json({
            error: "VALIDATION_ERROR",
            message: "The password change request is invalid.",
            details: validation.error.flatten(),
        });
        return;
    }
    try {
        await (0, auth_service_js_1.changePassword)(req.user.id, validation.data.currentPassword, validation.data.newPassword);
        res.clearCookie("azimuth_session", {
            httpOnly: true,
            secure: env_js_1.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
        });
        res.status(200).json({
            message: "Password changed successfully. Please sign in again.",
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to change password.";
        if (message === "Current password is incorrect." ||
            message ===
                "New password must be different from your current password.") {
            res.status(400).json({
                error: "PASSWORD_CHANGE_REJECTED",
                message,
            });
            return;
        }
        console.error("Change password error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to change password.",
        });
    }
}
async function verifyEmailController(req, res) {
    const validation = auth_schemas_js_1.verifyEmailSchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json({
            error: "VALIDATION_ERROR",
            message: "Verification token is invalid.",
        });
        return;
    }
    try {
        await (0, auth_service_js_1.verifyEmail)(validation.data.token);
        res.status(200).json({
            message: "Email verified successfully.",
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to verify email.";
        if (message ===
            "Invalid or expired verification token.") {
            res.status(400).json({
                error: "INVALID_VERIFICATION_TOKEN",
                message,
            });
            return;
        }
        console.error("Email verification error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to verify email.",
        });
    }
}
async function createTransactionAuthController(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    const validation = auth_schemas_js_1.transactionAuthSchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json({
            error: "VALIDATION_ERROR",
            message: "Transaction authentication is invalid.",
        });
        return;
    }
    try {
        const result = await (0, transaction_auth_service_js_1.createTransactionAuthChallenge)(req.user.id, validation.data.transferId, validation.data.password);
        res.status(201).json({
            challenge: result.challenge,
            expiresAt: result.expiresAt,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Transaction authentication failed.";
        res.status(401).json({
            error: "TRANSACTION_AUTH_FAILED",
            message,
        });
    }
}
//# sourceMappingURL=auth.controller.js.map