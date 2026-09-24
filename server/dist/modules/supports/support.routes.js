"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_js_1 = require("../../middleware/auth.middleware.js");
const support_controller_js_1 = require("./support.controller.js");
const router = (0, express_1.Router)();
router.use(auth_middleware_js_1.requireAuth);
router.post("/", support_controller_js_1.createSupportTicketController);
router.get("/", support_controller_js_1.getSupportTicketsController);
router.get("/:ticketId", support_controller_js_1.getSupportTicketController);
router.post("/:ticketId/messages", support_controller_js_1.addSupportMessageController);
router.patch("/:ticketId/messages/read", support_controller_js_1.markSupportMessagesAsReadController);
exports.default = router;
//# sourceMappingURL=support.routes.js.map