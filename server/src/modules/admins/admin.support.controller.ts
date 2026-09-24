import type { Request, Response } from "express";
import {
  getAdminSupportTicket,
  getAdminSupportTickets,
  replyToSupportTicket,
  updateSupportTicketStatus,
} from "./admin.support.service.js";
import { z } from "zod";

const listSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: z
    .enum([
      "OPEN",
      "IN_PROGRESS",
      "RESOLVED",
      "CLOSED",
    ])
    .optional(),
});

const replySchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .max(
      5000,
      "Message must be 5000 characters or fewer.",
    ),
});

const statusSchema = z.object({
  status: z.enum([
    "OPEN",
    "IN_PROGRESS",
    "RESOLVED",
    "CLOSED",
  ]),
});

function getParam(
  value: string | string[] | undefined,
) {
  return Array.isArray(value)
    ? value[0]
    : value;
}

export async function getAdminSupportTicketsController(
  req: Request,
  res: Response,
) {
  try {
    const parsed = listSchema.safeParse(
      req.query,
    );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid query parameters.",
        errors: parsed.error.flatten(),
      });
    }

    const result =
      await getAdminSupportTickets(
        parsed.data.page,
        parsed.data.limit,
        parsed.data.status,
      );

    return res.status(200).json(result);
  } catch (error) {
    console.error(
      "Admin support tickets error:",
      error,
    );

    return res.status(500).json({
      message:
        "Unable to retrieve support tickets.",
    });
  }
}

export async function getAdminSupportTicketController(
  req: Request,
  res: Response,
) {
  try {
    const ticketId = getParam(
      req.params.ticketId,
    );

    if (!ticketId) {
      return res.status(400).json({
        message: "Ticket ID is required.",
      });
    }

    const result =
      await getAdminSupportTicket(ticketId);

    if (!result) {
      return res.status(404).json({
        message: "Support ticket not found.",
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error(
      "Admin support ticket error:",
      error,
    );

    return res.status(500).json({
      message:
        "Unable to retrieve support ticket.",
    });
  }
}

export async function replyToSupportTicketController(
  req: Request,
  res: Response,
) {
  try {
    const parsed = replySchema.safeParse(
      req.body,
    );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid request.",
        errors: parsed.error.flatten(),
      });
    }

    const ticketId = getParam(
      req.params.ticketId,
    );

    if (!ticketId) {
      return res.status(400).json({
        message: "Ticket ID is required.",
      });
    }

    const message =
      await replyToSupportTicket(
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
        : "Unable to reply to support ticket.";

    return res.status(400).json({
      message,
    });
  }
}

export async function updateSupportTicketStatusController(
  req: Request,
  res: Response,
) {
  try {
    const parsed = statusSchema.safeParse(
      req.body,
    );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid request.",
        errors: parsed.error.flatten(),
      });
    }

    const ticketId = getParam(
      req.params.ticketId,
    );

    if (!ticketId) {
      return res.status(400).json({
        message: "Ticket ID is required.",
      });
    }

    const ticket =
      await updateSupportTicketStatus(
        ticketId,
        parsed.data.status,
      );

    return res.status(200).json({
      ticket,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to update support ticket.";

    return res.status(400).json({
      message,
    });
  }
}