import type { Request, Response } from "express";
import {
  getNotifications,
  getUnreadNotificationCount,
  markAllNotificationsAsRead,
  markNotificationAsRead,
} from "./notification.service.js";
import {
  notificationListSchema,
} from "./notification.schemas.js";

export async function getNotificationsController(
  req: Request,
  res: Response,
) {
  try {
    const parsed =
      notificationListSchema.safeParse(
        req.query,
      );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid query parameters.",
        errors: parsed.error.flatten(),
      });
    }

    const result = await getNotifications(
      req.user!.id,
      parsed.data.page,
      parsed.data.limit,
      parsed.data.unreadOnly,
    );

    return res.status(200).json(result);
  } catch {
    return res.status(500).json({
      message: "Unable to retrieve notifications.",
    });
  }
}

export async function getUnreadNotificationCountController(
  req: Request,
  res: Response,
) {
  try {
    const count =
      await getUnreadNotificationCount(
        req.user!.id,
      );

    return res.status(200).json({
      count,
    });
  } catch {
    return res.status(500).json({
      message:
        "Unable to retrieve unread notification count.",
    });
  }
}

export async function markNotificationAsReadController(
  req: Request,
  res: Response,
) {
  try {
    const notificationId = Array.isArray(
      req.params.notificationId,
    )
      ? req.params.notificationId[0]
      : req.params.notificationId;

    if (!notificationId) {
      return res.status(400).json({
        message:
          "Notification ID is required.",
      });
    }

    const notification =
      await markNotificationAsRead(
        req.user!.id,
        notificationId,
      );

    return res.status(200).json({
      notification,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to update notification.";

    return res.status(400).json({
      message,
    });
  }
}

export async function markAllNotificationsAsReadController(
  req: Request,
  res: Response,
) {
  try {
    const result =
      await markAllNotificationsAsRead(
        req.user!.id,
      );

    return res.status(200).json(result);
  } catch {
    return res.status(500).json({
      message:
        "Unable to update notifications.",
    });
  }
}