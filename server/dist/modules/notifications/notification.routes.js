"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_js_1 = require("../../middleware/auth.middleware.js");
const notification_controller_js_1 = require("./notification.controller.js");
const router = (0, express_1.Router)();
router.use(auth_middleware_js_1.requireAuth);
router.get("/", notification_controller_js_1.getNotificationsController);
router.get("/unread-count", notification_controller_js_1.getUnreadNotificationCountController);
router.patch("/read-all", notification_controller_js_1.markAllNotificationsAsReadController);
router.patch("/:notificationId/read", notification_controller_js_1.markNotificationAsReadController);
exports.default = router;
//# sourceMappingURL=notification.routes.js.map