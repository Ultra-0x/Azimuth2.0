import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { requireAdmin } from "../../middleware/admin.middleware.js";
import {
  createLoanController,
  getLoansController,
  getLoanController,
  updateLoanStatusController,
  disburseLoanController,
  repayLoanController,
} from "./loan.controller.js";

const router = Router();

router.use(requireAuth);

router.post("/", createLoanController);

router.get("/", getLoansController);

router.get("/:loanId", getLoanController);

router.patch(
  "/:loanId/status",
  requireAdmin,
  updateLoanStatusController,
);

router.post(
  "/:loanId/disburse",
  requireAdmin,
  disburseLoanController,
);

router.post(
  "/:loanId/repay",
  repayLoanController,
);

export default router;