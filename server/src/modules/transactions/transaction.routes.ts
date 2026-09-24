import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import {
  getCardTransactionController,
  getCardTransactionsController,
  getTransactionController,
  getTransactionsController,
} from "./transaction.controller.js";

const router = Router();

router.use(requireAuth);

// Card-specific transactions must come first.
router.get(
  "/cards/:cardId",
  getCardTransactionsController,
);

router.get(
  "/cards/:cardId/:transactionId",
  getCardTransactionController,
);

// Customer-wide transactions
router.get(
  "/",
  getTransactionsController,
);

router.get(
  "/:transactionId",
  getTransactionController,
);

export default router;