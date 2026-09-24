import rateLimit from "express-rate-limit";

export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    error: "RATE_LIMITED",
    message:
      "Too many authentication attempts. Please try again later.",
  },
});

export const transactionAuthRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    error: "TRANSACTION_AUTH_RATE_LIMITED",
    message:
      "Too many transaction authentication attempts. Please try again later.",
  },
});