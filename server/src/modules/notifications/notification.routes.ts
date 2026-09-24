import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import {
  getNotificationsController,
  getUnreadNotificationCountController,
  markAllNotificationsAsReadController,
  markNotificationAsReadController,
} from "./notification.controller.js";

const router = Router();

router.use(requireAuth);

router.get("/", getNotificationsController);

router.get(
  "/unread-count",
  getUnreadNotificationCountController,
);

router.patch(
  "/read-all",
  markAllNotificationsAsReadController,
);

router.patch(
  "/:notificationId/read",
  markNotificationAsReadController,
);

export default router;