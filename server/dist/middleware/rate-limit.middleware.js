"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionAuthRateLimiter = exports.authRateLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
exports.authRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: {
        error: "RATE_LIMITED",
        message: "Too many authentication attempts. Please try again later.",
    },
});
exports.transactionAuthRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: {
        error: "TRANSACTION_AUTH_RATE_LIMITED",
        message: "Too many transaction authentication attempts. Please try again later.",
    },
});
//# sourceMappingURL=rate-limit.middleware.js.map