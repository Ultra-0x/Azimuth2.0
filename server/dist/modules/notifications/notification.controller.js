"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotificationsController = getNotificationsController;
exports.getUnreadNotificationCountController = getUnreadNotificationCountController;
exports.markNotificationAsReadController = markNotificationAsReadController;
exports.markAllNotificationsAsReadController = markAllNotificationsAsReadController;
const notification_service_js_1 = require("./notification.service.js");
const notification_schemas_js_1 = require("./notification.schemas.js");
async function getNotificationsController(req, res) {
    try {
        const parsed = notification_schemas_js_1.notificationListSchema.safeParse(req.query);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid query parameters.",
                errors: parsed.error.flatten(),
            });
        }
        const result = await (0, notification_service_js_1.getNotifications)(req.user.id, parsed.data.page, parsed.data.limit, parsed.data.unreadOnly);
        return res.status(200).json(result);
    }
    catch {
        return res.status(500).json({
            message: "Unable to retrieve notifications.",
        });
    }
}
async function getUnreadNotificationCountController(req, res) {
    try {
        const count = await (0, notification_service_js_1.getUnreadNotificationCount)(req.user.id);
        return res.status(200).json({
            count,
        });
    }
    catch {
        return res.status(500).json({
            message: "Unable to retrieve unread notification count.",
        });
    }
}
async function markNotificationAsReadController(req, res) {
    try {
        const notificationId = Array.isArray(req.params.notificationId)
            ? req.params.notificationId[0]
            : req.params.notificationId;
        if (!notificationId) {
            return res.status(400).json({
                message: "Notification ID is required.",
            });
        }
        const notification = await (0, notification_service_js_1.markNotificationAsRead)(req.user.id, notificationId);
        return res.status(200).json({
            notification,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to update notification.";
        return res.status(400).json({
            message,
        });
    }
}
async function markAllNotificationsAsReadController(req, res) {
    try {
        const result = await (0, notification_service_js_1.markAllNotificationsAsRead)(req.user.id);
        return res.status(200).json(result);
    }
    catch {
        return res.status(500).json({
            message: "Unable to update notifications.",
        });
    }
}
//# sourceMappingURL=notification.controller.js.map