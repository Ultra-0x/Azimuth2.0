import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { requireAdmin } from "../../middleware/admin.middleware.js";
import { getAdminOverviewController } from "./admin.controller.js";
import {
  getAdminUsersController,
  updateAdminUserStatusController,
} from "./admin.users.controller.js";
import {
  getAdminSupportTicketController,
  getAdminSupportTicketsController,
  replyToSupportTicketController,
  updateSupportTicketStatusController,
} from "./admin.support.controller.js";
import {
    disburseAdminLoanController,
  getAdminLoanController,
  getAdminLoansController,
  updateAdminLoanStatusController,
} from "./admin.loans.controller.js";
import {
  getAdminAccountController,
  getAdminAccountsController,
} from "./admin.accounts.controller.js";
import {
    createAdminTransferController,
  getAdminTransactionController,
  getAdminTransactionsController,
} from "./admin.transactions.controller.js";

const router = Router();

router.use(requireAuth);
router.use(requireAdmin);

router.get(
  "/overview",
  getAdminOverviewController,
);

router.get(
  "/users",
  getAdminUsersController,
);

router.patch(
  "/users/:userId/status",
  updateAdminUserStatusController,
);

router.get(
  "/support",
  getAdminSupportTicketsController,
);

router.get(
  "/support/:ticketId",
  getAdminSupportTicketController,
);

router.post(
  "/support/:ticketId/messages",
  replyToSupportTicketController,
);

router.patch(
  "/support/:ticketId/status",
  updateSupportTicketStatusController,
);

router.get(
  "/loans",
  getAdminLoansController,
);

router.get(
  "/loans/:loanId",
  getAdminLoanController,
);

router.patch(
  "/loans/:loanId/status",
  updateAdminLoanStatusController,
);

router.get(
  "/accounts",
  getAdminAccountsController,
);

router.post(
  "/loans/:loanId/disburse",
  disburseAdminLoanController,
);

router.get(
  "/accounts/:accountId",
  getAdminAccountController,
);

router.get(
  "/transactions",
  getAdminTransactionsController,
);

router.get(
  "/transactions/:transactionId",
  getAdminTransactionController,
);

router.post(
  "/transfers",
  createAdminTransferController,
);

export default router;