export declare function getAdminSupportTickets(page: number, limit: number, status?: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED"): Promise<{
    tickets: {
        category: string;
        createdAt: Date;
        id: string;
        priority: import("../../generated/prisma/enums.js").SupportTicketPriority;
        status: import("../../generated/prisma/enums.js").SupportTicketStatus;
        subject: string;
        updatedAt: Date;
        user: {
            email: string;
            firstName: string;
            id: string;
            lastName: string;
        };
        userId: string;
    }[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
export declare function getAdminSupportTicket(ticketId: string): Promise<{
    ticket: {
        category: string;
        createdAt: Date;
        id: string;
        priority: import("../../generated/prisma/enums.js").SupportTicketPriority;
        status: import("../../generated/prisma/enums.js").SupportTicketStatus;
        subject: string;
        updatedAt: Date;
        user: {
            email: string;
            firstName: string;
            id: string;
            lastName: string;
        };
        userId: string;
    };
    messages: {
        createdAt: Date;
        id: string;
        message: string;
        readAt: Date | null;
        ticketId: string;
        userId: string;
    }[];
} | null>;
export declare function replyToSupportTicket(adminUserId: string, ticketId: string, message: string): Promise<{
    createdAt: Date;
    id: string;
    message: string;
    readAt: Date | null;
    ticketId: string;
    userId: string;
}>;
export declare function updateSupportTicketStatus(ticketId: string, status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED"): Promise<{
    category: string;
    createdAt: Date;
    id: string;
    priority: import("../../generated/prisma/enums.js").SupportTicketPriority;
    status: import("../../generated/prisma/enums.js").SupportTicketStatus;
    subject: string;
    updatedAt: Date;
    user: {
        email: string;
        firstName: string;
        id: string;
        lastName: string;
    };
    userId: string;
}>;
