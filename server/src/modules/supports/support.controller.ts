import type { Request, Response } from "express";
import {
  addSupportMessage,
  createSupportTicket,
  getSupportTicket,
  getSupportTickets,
  markSupportMessagesAsRead,
} from "./support.service.js";
import {
  addSupportMessageSchema,
  createSupportTicketSchema,
  supportTicketListSchema,
} from "./support.schemas.js";

export async function createSupportTicketController(
  req: Request,
  res: Response,
) {
  try {
    const parsed =
      createSupportTicketSchema.safeParse(
        req.body,
      );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid request.",
        errors: parsed.error.flatten(),
      });
    }

    const result =
      await createSupportTicket(
        req.user!.id,
        parsed.data.subject,
        parsed.data.category,
        parsed.data.priority,
        parsed.data.message,
      );

    return res.status(201).json(result);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to create support ticket.";

    return res.status(400).json({
      message,
    });
  }
}

export async function getSupportTicketsController(
  req: Request,
  res: Response,
) {
  try {
    const parsed =
      supportTicketListSchema.safeParse(
        req.query,
      );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid query parameters.",
        errors: parsed.error.flatten(),
      });
    }

    const result =
      await getSupportTickets(
        req.user!.id,
        parsed.data.page,
        parsed.data.limit,
      );

    return res.status(200).json(result);
  } catch {
    return res.status(500).json({
      message:
        "Unable to retrieve support tickets.",
    });
  }
}

export async function getSupportTicketController(
  req: Request,
  res: Response,
) {
  try {
    const ticketId = Array.isArray(
      req.params.ticketId,
    )
      ? req.params.ticketId[0]
      : req.params.ticketId;

    if (!ticketId) {
      return res.status(400).json({
        message: "Ticket ID is required.",
      });
    }

    const result =
      await getSupportTicket(
        req.user!.id,
        ticketId,
      );

    if (!result) {
      return res.status(404).json({
        message: "Support ticket not found.",
      });
    }

    return res.status(200).json(result);
  } catch {
    return res.status(500).json({
      message:
        "Unable to retrieve support ticket.",
    });
  }
}

export async function addSupportMessageController(
  req: Request,
  res: Response,
) {
  try {
    const parsed =
      addSupportMessageSchema.safeParse(
        req.body,
      );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid request.",
        errors: parsed.error.flatten(),
      });
    }

    const ticketId = Array.isArray(
      req.params.ticketId,
    )
      ? req.params.ticketId[0]
      : req.params.ticketId;

    if (!ticketId) {
      return res.status(400).json({
        message: "Ticket ID is required.",
      });
    }

    const message =
      await addSupportMessage(
        req.user!.id,
        ticketId,
        parsed.data.message,
      );

    return res.status(201).json({
      message,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to add support message.";

    return res.status(400).json({
      message,
    });
  }
}

export async function markSupportMessagesAsReadController(
  req: Request,
  res: Response,
) {
  try {
    const ticketId = Array.isArray(
      req.params.ticketId,
    )
      ? req.params.ticketId[0]
      : req.params.ticketId;

    if (!ticketId) {
      return res.status(400).json({
        message: "Ticket ID is required.",
      });
    }

    const result =
      await markSupportMessagesAsRead(
        req.user!.id,
        ticketId,
      );

    return res.status(200).json(result);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to update support messages.";

    return res.status(400).json({
      message,
    });
  }
}