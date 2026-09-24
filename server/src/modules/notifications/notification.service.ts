import { prisma } from "../../database/prisma.js";

const notificationSelect = {
  id: true,
  type: true,
  title: true,
  message: true,
  readAt: true,
  createdAt: true,
} as const;

export async function createNotification(
  userId: string,
  type: string,
  title: string,
  message: string,
) {
  return prisma.notification.create({
    data: {
      userId,
      type,
      title,
      message,
    },
    select: notificationSelect,
  });
}

export async function getNotifications(
  userId: string,
  page: number,
  limit: number,
  unreadOnly = false,
) {
  const skip = (page - 1) * limit;

  const where = {
    userId,
    ...(unreadOnly
      ? {
          readAt: null,
        }
      : {}),
  };

  const [notifications, total] =
    await prisma.$transaction([
      prisma.notification.findMany({
        where,
        select: notificationSelect,
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
      }),

      prisma.notification.count({
        where,
      }),
    ]);

  return {
    notifications,
    total,
  };
}

export async function markNotificationAsRead(
  userId: string,
  notificationId: string,
) {
  const notification =
    await prisma.notification.findFirst({
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

  return prisma.notification.update({
    where: {
      id: notification.id,
    },
    data: {
      readAt: new Date(),
    },
    select: notificationSelect,
  });
}

export async function markAllNotificationsAsRead(
  userId: string,
) {
  const result =
    await prisma.notification.updateMany({
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

export async function getUnreadNotificationCount(
  userId: string,
) {
  return prisma.notification.count({
    where: {
      userId,
      readAt: null,
    },
  });
}