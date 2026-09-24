"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_js_1 = require("../../middleware/auth.middleware.js");
const accounts_controller_js_1 = require("./accounts.controller.js");
const router = (0, express_1.Router)();
router.get("/", auth_middleware_js_1.requireAuth, accounts_controller_js_1.getAccounts);
router.get("/:id/transactions", auth_middleware_js_1.requireAuth, accounts_controller_js_1.getTransactions);
router.get("/:id/transactions/:transactionId", auth_middleware_js_1.requireAuth, accounts_controller_js_1.getTransaction);
router.get("/:id", auth_middleware_js_1.requireAuth, accounts_controller_js_1.getAccount);
exports.default = router;
//# sourceMappingURL=accounts.routes.js.map