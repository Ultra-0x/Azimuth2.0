import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import {
  getAccount,
  getAccounts,
  getTransactions,
  getTransaction,
} from "./accounts.controller.js";

const router = Router();

router.get("/", requireAuth, getAccounts);

router.get(
  "/:id/transactions",
  requireAuth,
  getTransactions,
);

router.get(
  "/:id/transactions/:transactionId",
  requireAuth,
  getTransaction,
);

router.get("/:id", requireAuth, getAccount);

export default router;