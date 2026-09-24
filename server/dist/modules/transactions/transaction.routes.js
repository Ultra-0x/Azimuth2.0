"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_js_1 = require("../../middleware/auth.middleware.js");
const transaction_controller_js_1 = require("./transaction.controller.js");
const router = (0, express_1.Router)();
router.use(auth_middleware_js_1.requireAuth);
// Card-specific transactions must come first.
router.get("/cards/:cardId", transaction_controller_js_1.getCardTransactionsController);
router.get("/cards/:cardId/:transactionId", transaction_controller_js_1.getCardTransactionController);
// Customer-wide transactions
router.get("/", transaction_controller_js_1.getTransactionsController);
router.get("/:transactionId", transaction_controller_js_1.getTransactionController);
exports.default = router;
//# sourceMappingURL=transaction.routes.js.map