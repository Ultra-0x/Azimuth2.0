"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
const session_service_js_1 = require("../modules/auth/session.service.js");
async function requireAuth(req, res, next) {
    try {
        const token = req.cookies?.azimuth_session;
        if (!token) {
            res.status(401).json({
                error: "UNAUTHENTICATED",
                message: "Authentication is required.",
            });
            return;
        }
        const session = await (0, session_service_js_1.getSession)(token);
        if (!session) {
            res.clearCookie("azimuth_session", {
                httpOnly: true,
                sameSite: "lax",
                secure: process.env.NODE_ENV === "production",
            });
            res.status(401).json({
                error: "INVALID_SESSION",
                message: "Your session is invalid or has expired.",
            });
            return;
        }
        req.user = {
            id: session.user.id,
            email: session.user.email,
            firstName: session.user.firstName,
            lastName: session.user.lastName,
            status: session.user.status,
            role: session.user.role,
        };
        req.session = {
            id: session.id,
            expiresAt: session.expiresAt,
        };
        next();
    }
    catch (error) {
        console.error("Authentication middleware error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to authenticate this request.",
        });
    }
}
//# sourceMappingURL=auth.middleware.js.map