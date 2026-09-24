"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transfer_controller_js_1 = require("./transfer.controller.js");
const auth_middleware_js_1 = require("../../middleware/auth.middleware.js");
const rate_limit_middleware_js_1 = require("../../middleware/rate-limit.middleware.js");
const router = (0, express_1.Router)();
router.post("/", auth_middleware_js_1.requireAuth, transfer_controller_js_1.createTransferController);
router.post("/:id/authenticate", auth_middleware_js_1.requireAuth, rate_limit_middleware_js_1.transactionAuthRateLimiter, transfer_controller_js_1.authenticateTransferController);
exports.default = router;
//# sourceMappingURL=transfer.routes.js.map