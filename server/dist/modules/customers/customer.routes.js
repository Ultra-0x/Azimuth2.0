"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_js_1 = require("../../middleware/auth.middleware.js");
const customer_controller_js_1 = require("./customer.controller.js");
const router = (0, express_1.Router)();
router.get("/me", auth_middleware_js_1.requireAuth, customer_controller_js_1.getMyProfile);
router.patch("/me", auth_middleware_js_1.requireAuth, customer_controller_js_1.updateMyProfile);
exports.default = router;
//# sourceMappingURL=customer.routes.js.map