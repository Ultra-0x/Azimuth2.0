import { prisma } from "../../database/prisma.js";

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
} as const;

const messageSelect = {
  id: true,
  ticketId: true,
  userId: true,
  message: true,
  readAt: true,
  createdAt: true,
} as const;

export async function getAdminSupportTickets(
  page: number,
  limit: number,
  status?:
    | "OPEN"
    | "IN_PROGRESS"
    | "RESOLVED"
    | "CLOSED",
) {
  const skip = (page - 1) * limit;

  const where = status
    ? { status }
    : {};

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
    page,
    limit,
    totalPages: Math.ceil(
      total / limit,
    ),
  };
}

export async function getAdminSupportTicket(
  ticketId: string,
) {
  const ticket =
    await prisma.supportTicket.findUnique({
      where: {
        id: ticketId,
      },
      select: ticketSelect,
    });

  if (!ticket) {
    return null;
  }

  const messages =
    await prisma.supportMessage.findMany({
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

export async function replyToSupportTicket(
  adminUserId: string,
  ticketId: string,
  message: string,
) {
  const ticket =
    await prisma.supportTicket.findUnique({
      where: {
        id: ticketId,
      },
      select: {
        id: true,
        status: true,
      },
    });

  if (!ticket) {
    throw new Error(
      "Support ticket not found.",
    );
  }

  if (ticket.status === "CLOSED") {
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
    },
  );
}

export async function updateSupportTicketStatus(
  ticketId: string,
  status:
    | "OPEN"
    | "IN_PROGRESS"
    | "RESOLVED"
    | "CLOSED",
) {
  const ticket =
    await prisma.supportTicket.findUnique({
      where: {
        id: ticketId,
      },
      select: {
        id: true,
      },
    });

  if (!ticket) {
    throw new Error(
      "Support ticket not found.",
    );
  }

  return prisma.supportTicket.update({
    where: {
      id: ticket.id,
    },
    data: {
      status,
    },
    select: ticketSelect,
  });
}