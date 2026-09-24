"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_js_1 = require("../../middleware/auth.middleware.js");
const admin_middleware_js_1 = require("../../middleware/admin.middleware.js");
const loan_controller_js_1 = require("./loan.controller.js");
const router = (0, express_1.Router)();
router.use(auth_middleware_js_1.requireAuth);
router.post("/", loan_controller_js_1.createLoanController);
router.get("/", loan_controller_js_1.getLoansController);
router.get("/:loanId", loan_controller_js_1.getLoanController);
router.patch("/:loanId/status", admin_middleware_js_1.requireAdmin, loan_controller_js_1.updateLoanStatusController);
router.post("/:loanId/disburse", admin_middleware_js_1.requireAdmin, loan_controller_js_1.disburseLoanController);
router.post("/:loanId/repay", loan_controller_js_1.repayLoanController);
exports.default = router;
//# sourceMappingURL=loan.routes.js.map