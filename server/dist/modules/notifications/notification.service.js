"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotification = createNotification;
exports.getNotifications = getNotifications;
exports.markNotificationAsRead = markNotificationAsRead;
exports.markAllNotificationsAsRead = markAllNotificationsAsRead;
exports.getUnreadNotificationCount = getUnreadNotificationCount;
const prisma_js_1 = require("../../database/prisma.js");
const notificationSelect = {
    id: true,
    type: true,
    title: true,
    message: true,
    readAt: true,
    createdAt: true,
};
async function createNotification(userId, type, title, message) {
    return prisma_js_1.prisma.notification.create({
        data: {
            userId,
            type,
            title,
            message,
        },
        select: notificationSelect,
    });
}
async function getNotifications(userId, page, limit, unreadOnly = false) {
    const skip = (page - 1) * limit;
    const where = {
        userId,
        ...(unreadOnly
            ? {
                readAt: null,
            }
            : {}),
    };
    const [notifications, total] = await prisma_js_1.prisma.$transaction([
        prisma_js_1.prisma.notification.findMany({
            where,
            select: notificationSelect,
            orderBy: {
                createdAt: "desc",
            },
            skip,
            take: limit,
        }),
        prisma_js_1.prisma.notification.count({
            where,
        }),
    ]);
    return {
        notifications,
        total,
    };
}
async function markNotificationAsRead(userId, notificationId) {
    const notification = await prisma_js_1.prisma.notification.findFirst({
        where: {
            id: notificationId,
            userId,
        },
        select: {
            id: true,
            readAt: true,
        },
    });
    if (!notification) {
        throw new Error("Notification not found.");
    }
    if (notification.readAt) {
        return notification;
    }
    return prisma_js_1.prisma.notification.update({
        where: {
            id: notification.id,
        },
        data: {
            readAt: new Date(),
        },
        select: notificationSelect,
    });
}
async function markAllNotificationsAsRead(userId) {
    const result = await prisma_js_1.prisma.notification.updateMany({
        where: {
            userId,
            readAt: null,
        },
        data: {
            readAt: new Date(),
        },
    });
    return {
        updated: result.count,
    };
}
async function getUnreadNotificationCount(userId) {
    return prisma_js_1.prisma.notification.count({
        where: {
            userId,
            readAt: null,
        },
    });
}
//# sourceMappingURL=notification.service.js.map