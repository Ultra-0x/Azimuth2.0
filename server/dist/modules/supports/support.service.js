"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSupportTicket = createSupportTicket;
exports.getSupportTickets = getSupportTickets;
exports.getSupportTicket = getSupportTicket;
exports.addSupportMessage = addSupportMessage;
exports.markSupportMessagesAsRead = markSupportMessagesAsRead;
const prisma_js_1 = require("../../database/prisma.js");
const ticketSelect = {
    id: true,
    subject: true,
    category: true,
    priority: true,
    status: true,
    createdAt: true,
    updatedAt: true,
};
const messageSelect = {
    id: true,
    ticketId: true,
    userId: true,
    message: true,
    readAt: true,
    createdAt: true,
};
async function createSupportTicket(userId, subject, category, priority, message) {
    return prisma_js_1.prisma.$transaction(async (tx) => {
        const ticket = await tx.supportTicket.create({
            data: {
                userId,
                subject,
                category,
                priority,
            },
            select: ticketSelect,
        });
        const firstMessage = await tx.supportMessage.create({
            data: {
                ticketId: ticket.id,
                userId,
                message,
            },
            select: messageSelect,
        });
        return {
            ticket,
            message: firstMessage,
        };
    });
}
async function getSupportTickets(userId, page, limit) {
    const skip = (page - 1) * limit;
    const where = {
        userId,
    };
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
    };
}
async function getSupportTicket(userId, ticketId) {
    const ticket = await prisma_js_1.prisma.supportTicket.findFirst({
        where: {
            id: ticketId,
            userId,
        },
        select: ticketSelect,
    });
    if (!ticket) {
        return null;
    }
    const messages = await prisma_js_1.prisma.supportMessage.findMany({
        where: {
            ticketId: ticket.id,
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
async function addSupportMessage(userId, ticketId, message) {
    const ticket = await prisma_js_1.prisma.supportTicket.findFirst({
        where: {
            id: ticketId,
            userId,
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
                userId,
                message,
            },
            select: messageSelect,
        });
        await tx.supportTicket.update({
            where: {
                id: ticket.id,
            },
            data: {
                status: "OPEN",
            },
        });
        return createdMessage;
    });
}
async function markSupportMessagesAsRead(userId, ticketId) {
    const ticket = await prisma_js_1.prisma.supportTicket.findFirst({
        where: {
            id: ticketId,
            userId,
        },
        select: {
            id: true,
        },
    });
    if (!ticket) {
        throw new Error("Support ticket not found.");
    }
    const result = await prisma_js_1.prisma.supportMessage.updateMany({
        where: {
            ticketId: ticket.id,
            userId: {
                not: userId,
            },
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
//# sourceMappingURL=support.service.js.map