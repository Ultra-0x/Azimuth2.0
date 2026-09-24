"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminSupportTickets = getAdminSupportTickets;
exports.getAdminSupportTicket = getAdminSupportTicket;
exports.replyToSupportTicket = replyToSupportTicket;
exports.updateSupportTicketStatus = updateSupportTicketStatus;
const prisma_js_1 = require("../../database/prisma.js");
const ticketSelect = {
    id: true,
    userId: true,
    subject: true,
    category: true,
    priority: true,
    status: true,
    createdAt: true,
    updatedAt: true,
    user: {
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
        },
    },
};
const messageSelect = {
    id: true,
    ticketId: true,
    userId: true,
    message: true,
    readAt: true,
    createdAt: true,
};
async function getAdminSupportTickets(page, limit, status) {
    const skip = (page - 1) * limit;
    const where = status
        ? { status }
        : {};
    const [tickets, total] = await prisma_js_1.prisma.$transaction([
        prisma_js_1.prisma.supportTicket.findMany({
            where,
            select: ticketSelect,
            orderBy: {
                updatedAt: "desc",
            },
            skip,
            take: limit,
        }),
        prisma_js_1.prisma.supportTicket.count({
            where,
        }),
    ]);
    return {
        tickets,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
}
async function getAdminSupportTicket(ticketId) {
    const ticket = await prisma_js_1.prisma.supportTicket.findUnique({
        where: {
            id: ticketId,
        },
        select: ticketSelect,
    });
    if (!ticket) {
        return null;
    }
    const messages = await prisma_js_1.prisma.supportMessage.findMany({
        where: {
            ticketId,
        },
        select: messageSelect,
        orderBy: {
            createdAt: "asc",
        },
    });
    return {
        ticket,
        messages,
    };
}
async function replyToSupportTicket(adminUserId, ticketId, message) {
    const ticket = await prisma_js_1.prisma.supportTicket.findUnique({
        where: {
            id: ticketId,
        },
        select: {
            id: true,
            status: true,
        },
    });
    if (!ticket) {
        throw new Error("Support ticket not found.");
    }
    if (ticket.status === "CLOSED") {
        throw new Error("This support ticket is closed.");
    }
    return prisma_js_1.prisma.$transaction(async (tx) => {
        const createdMessage = await tx.supportMessage.create({
            data: {
                ticketId: ticket.id,
                userId: adminUserId,
                message,
            },
            select: messageSelect,
        });
        await tx.supportTicket.update({
            where: {
                id: ticket.id,
            },
            data: {
                status: "IN_PROGRESS",
            },
        });
        return createdMessage;
    });
}
async function updateSupportTicketStatus(ticketId, status) {
    const ticket = await prisma_js_1.prisma.supportTicket.findUnique({
        where: {
            id: ticketId,
        },
        select: {
            id: true,
        },
    });
    if (!ticket) {
        throw new Error("Support ticket not found.");
    }
    return prisma_js_1.prisma.supportTicket.update({
        where: {
            id: ticket.id,
        },
        data: {
            status,
        },
        select: ticketSelect,
    });
}
//# sourceMappingURL=admin.support.service.js.map