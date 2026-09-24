import { prisma } from "../../database/prisma.js";

const ticketSelect = {
  id: true,
  subject: true,
  category: true,
  priority: true,
  status: true,
  createdAt: true,
  updatedAt: true,
} as const;

const messageSelect = {
  id: true,
  ticketId: true,
  userId: true,
  message: true,
  readAt: true,
  createdAt: true,
} as const;

export async function createSupportTicket(
  userId: string,
  subject: string,
  category: string,
  priority:
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "URGENT",
  message: string,
) {
  return prisma.$transaction(
    async (tx) => {
      const ticket =
        await tx.supportTicket.create({
          data: {
            userId,
            subject,
            category,
            priority,
          },
          select: ticketSelect,
        });

      const firstMessage =
        await tx.supportMessage.create({
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
    },
  );
}

export async function getSupportTickets(
  userId: string,
  page: number,
  limit: number,
) {
  const skip = (page - 1) * limit;

  const where = {
    userId,
  };

  const [tickets, total] =
    await prisma.$transaction([
      prisma.supportTicket.findMany({
        where,
        select: ticketSelect,
        orderBy: {
          updatedAt: "desc",
        },
        skip,
        take: limit,
      }),

      prisma.supportTicket.count({
        where,
      }),
    ]);

  return {
    tickets,
    total,
  };
}

export async function getSupportTicket(
  userId: string,
  ticketId: string,
) {
  const ticket =
    await prisma.supportTicket.findFirst({
      where: {
        id: ticketId,
        userId,
      },
      select: ticketSelect,
    });

  if (!ticket) {
    return null;
  }

  const messages =
    await prisma.supportMessage.findMany({
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

export async function addSupportMessage(
  userId: string,
  ticketId: string,
  message: string,
) {
  const ticket =
    await prisma.supportTicket.findFirst({
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

  if (
    ticket.status === "CLOSED"
  ) {
    throw new Error(
      "This support ticket is closed.",
    );
  }

  return prisma.$transaction(
    async (tx) => {
      const createdMessage =
        await tx.supportMessage.create({
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
    },
  );
}

export async function markSupportMessagesAsRead(
  userId: string,
  ticketId: string,
) {
  const ticket =
    await prisma.supportTicket.findFirst({
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

  const result =
    await prisma.supportMessage.updateMany({
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