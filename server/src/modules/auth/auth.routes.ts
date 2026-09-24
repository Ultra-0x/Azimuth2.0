import { Router } from "express";
import {
  register,
  login,
  verifyEmailController,
  getCurrentUser,
  logout,
  changePasswordController,
  createTransactionAuthController,
} from "./auth.controller.js";
import { requireAuth } from "../../middleware/auth.middleware.js";
import {
  authRateLimiter,
  transactionAuthRateLimiter,
} from "../../middleware/rate-limit.middleware.js";

const router = Router();

router.post(
  "/register",
  authRateLimiter,
  register,
);

router.post(
  "/login",
  authRateLimiter,
  login,
);

router.post(
  "/verify-email",
  authRateLimiter,
  verifyEmailController,
);

router.get(
  "/me",
  requireAuth,
  getCurrentUser,
);

router.post(
  "/logout",
  requireAuth,
  logout,
);

router.post(
  "/change-password",
  requireAuth,
  authRateLimiter,
  changePasswordController,
);

router.post(
  "/transaction-auth/challenge",
  requireAuth,
  transactionAuthRateLimiter,
  createTransactionAuthController,
);

export default router;