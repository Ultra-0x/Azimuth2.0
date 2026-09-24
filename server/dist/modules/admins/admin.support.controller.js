"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminSupportTicketsController = getAdminSupportTicketsController;
exports.getAdminSupportTicketController = getAdminSupportTicketController;
exports.replyToSupportTicketController = replyToSupportTicketController;
exports.updateSupportTicketStatusController = updateSupportTicketStatusController;
const admin_support_service_js_1 = require("./admin.support.service.js");
const zod_1 = require("zod");
const listSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().min(1).default(1),
    limit: zod_1.z.coerce.number().int().min(1).max(100).default(20),
    status: zod_1.z
        .enum([
        "OPEN",
        "IN_PROGRESS",
        "RESOLVED",
        "CLOSED",
    ])
        .optional(),
});
const replySchema = zod_1.z.object({
    message: zod_1.z
        .string()
        .trim()
        .min(1, "Message is required.")
        .max(5000, "Message must be 5000 characters or fewer."),
});
const statusSchema = zod_1.z.object({
    status: zod_1.z.enum([
        "OPEN",
        "IN_PROGRESS",
        "RESOLVED",
        "CLOSED",
    ]),
});
function getParam(value) {
    return Array.isArray(value)
        ? value[0]
        : value;
}
async function getAdminSupportTicketsController(req, res) {
    try {
        const parsed = listSchema.safeParse(req.query);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid query parameters.",
                errors: parsed.error.flatten(),
            });
        }
        const result = await (0, admin_support_service_js_1.getAdminSupportTickets)(parsed.data.page, parsed.data.limit, parsed.data.status);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error("Admin support tickets error:", error);
        return res.status(500).json({
            message: "Unable to retrieve support tickets.",
        });
    }
}
async function getAdminSupportTicketController(req, res) {
    try {
        const ticketId = getParam(req.params.ticketId);
        if (!ticketId) {
            return res.status(400).json({
                message: "Ticket ID is required.",
            });
        }
        const result = await (0, admin_support_service_js_1.getAdminSupportTicket)(ticketId);
        if (!result) {
            return res.status(404).json({
                message: "Support ticket not found.",
            });
        }
        return res.status(200).json(result);
    }
    catch (error) {
        console.error("Admin support ticket error:", error);
        return res.status(500).json({
            message: "Unable to retrieve support ticket.",
        });
    }
}
async function replyToSupportTicketController(req, res) {
    try {
        const parsed = replySchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid request.",
                errors: parsed.error.flatten(),
            });
        }
        const ticketId = getParam(req.params.ticketId);
        if (!ticketId) {
            return res.status(400).json({
                message: "Ticket ID is required.",
            });
        }
        const message = await (0, admin_support_service_js_1.replyToSupportTicket)(req.user.id, ticketId, parsed.data.message);
        return res.status(201).json({
            message,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to reply to support ticket.";
        return res.status(400).json({
            message,
        });
    }
}
async function updateSupportTicketStatusController(req, res) {
    try {
        const parsed = statusSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid request.",
                errors: parsed.error.flatten(),
            });
        }
        const ticketId = getParam(req.params.ticketId);
        if (!ticketId) {
            return res.status(400).json({
                message: "Ticket ID is required.",
            });
        }
        const ticket = await (0, admin_support_service_js_1.updateSupportTicketStatus)(ticketId, parsed.data.status);
        return res.status(200).json({
            ticket,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to update support ticket.";
        return res.status(400).json({
            message,
        });
    }
}
//# sourceMappingURL=admin.support.controller.js.map