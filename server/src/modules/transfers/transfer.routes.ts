import { Router } from "express";
import {
  createTransferController,
  authenticateTransferController,
} from "./transfer.controller.js";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { transactionAuthRateLimiter } from "../../middleware/rate-limit.middleware.js";

const router = Router();

router.post(
  "/",
  requireAuth,
  createTransferController,
);

router.post(
  "/:id/authenticate",
  requireAuth,
  transactionAuthRateLimiter,
  authenticateTransferController,
);

export default router;
