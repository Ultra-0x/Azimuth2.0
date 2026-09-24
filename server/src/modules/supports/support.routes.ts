import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import {
  addSupportMessageController,
  createSupportTicketController,
  getSupportTicketController,
  getSupportTicketsController,
  markSupportMessagesAsReadController,
} from "./support.controller.js";

const router = Router();

router.use(requireAuth);

router.post("/", createSupportTicketController);

router.get("/", getSupportTicketsController);

router.get(
  "/:ticketId",
  getSupportTicketController,
);

router.post(
  "/:ticketId/messages",
  addSupportMessageController,
);

router.patch(
  "/:ticketId/messages/read",
  markSupportMessagesAsReadController,
);

export default router;