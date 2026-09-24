"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSupportTicketController = createSupportTicketController;
exports.getSupportTicketsController = getSupportTicketsController;
exports.getSupportTicketController = getSupportTicketController;
exports.addSupportMessageController = addSupportMessageController;
exports.markSupportMessagesAsReadController = markSupportMessagesAsReadController;
const support_service_js_1 = require("./support.service.js");
const support_schemas_js_1 = require("./support.schemas.js");
async function createSupportTicketController(req, res) {
    try {
        const parsed = support_schemas_js_1.createSupportTicketSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid request.",
                errors: parsed.error.flatten(),
            });
        }
        const result = await (0, support_service_js_1.createSupportTicket)(req.user.id, parsed.data.subject, parsed.data.category, parsed.data.priority, parsed.data.message);
        return res.status(201).json(result);
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to create support ticket.";
        return res.status(400).json({
            message,
        });
    }
}
async function getSupportTicketsController(req, res) {
    try {
        const parsed = support_schemas_js_1.supportTicketListSchema.safeParse(req.query);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid query parameters.",
                errors: parsed.error.flatten(),
            });
        }
        const result = await (0, support_service_js_1.getSupportTickets)(req.user.id, parsed.data.page, parsed.data.limit);
        return res.status(200).json(result);
    }
    catch {
        return res.status(500).json({
            message: "Unable to retrieve support tickets.",
        });
    }
}
async function getSupportTicketController(req, res) {
    try {
        const ticketId = Array.isArray(req.params.ticketId)
            ? req.params.ticketId[0]
            : req.params.ticketId;
        if (!ticketId) {
            return res.status(400).json({
                message: "Ticket ID is required.",
            });
        }
        const result = await (0, support_service_js_1.getSupportTicket)(req.user.id, ticketId);
        if (!result) {
            return res.status(404).json({
                message: "Support ticket not found.",
            });
        }
        return res.status(200).json(result);
    }
    catch {
        return res.status(500).json({
            message: "Unable to retrieve support ticket.",
        });
    }
}
async function addSupportMessageController(req, res) {
    try {
        const parsed = support_schemas_js_1.addSupportMessageSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid request.",
                errors: parsed.error.flatten(),
            });
        }
        const ticketId = Array.isArray(req.params.ticketId)
            ? req.params.ticketId[0]
            : req.params.ticketId;
        if (!ticketId) {
            return res.status(400).json({
                message: "Ticket ID is required.",
            });
        }
        const message = await (0, support_service_js_1.addSupportMessage)(req.user.id, ticketId, parsed.data.message);
        return res.status(201).json({
            message,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to add support message.";
        return res.status(400).json({
            message,
        });
    }
}
async function markSupportMessagesAsReadController(req, res) {
    try {
        const ticketId = Array.isArray(req.params.ticketId)
            ? req.params.ticketId[0]
            : req.params.ticketId;
        if (!ticketId) {
            return res.status(400).json({
                message: "Ticket ID is required.",
            });
        }
        const result = await (0, support_service_js_1.markSupportMessagesAsRead)(req.user.id, ticketId);
        return res.status(200).json(result);
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to update support messages.";
        return res.status(400).json({
            message,
        });
    }
}
//# sourceMappingURL=support.controller.js.map