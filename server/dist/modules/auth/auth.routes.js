"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_js_1 = require("./auth.controller.js");
const auth_middleware_js_1 = require("../../middleware/auth.middleware.js");
const rate_limit_middleware_js_1 = require("../../middleware/rate-limit.middleware.js");
const router = (0, express_1.Router)();
router.post("/register", rate_limit_middleware_js_1.authRateLimiter, auth_controller_js_1.register);
router.post("/login", rate_limit_middleware_js_1.authRateLimiter, auth_controller_js_1.login);
router.post("/verify-email", rate_limit_middleware_js_1.authRateLimiter, auth_controller_js_1.verifyEmailController);
router.get("/me", auth_middleware_js_1.requireAuth, auth_controller_js_1.getCurrentUser);
router.post("/logout", auth_middleware_js_1.requireAuth, auth_controller_js_1.logout);
router.post("/change-password", auth_middleware_js_1.requireAuth, rate_limit_middleware_js_1.authRateLimiter, auth_controller_js_1.changePasswordController);
router.post("/transaction-auth/challenge", auth_middleware_js_1.requireAuth, rate_limit_middleware_js_1.transactionAuthRateLimiter, auth_controller_js_1.createTransactionAuthController);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map