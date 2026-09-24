export declare function createSupportTicket(userId: string, subject: string, category: string, priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT", message: string): Promise<{
    ticket: {
        category: string;
        createdAt: Date;
        id: string;
        priority: import("../../generated/prisma/enums.js").SupportTicketPriority;
        status: import("../../generated/prisma/enums.js").SupportTicketStatus;
        subject: string;
        updatedAt: Date;
    };
    message: {
        createdAt: Date;
        id: string;
        message: string;
        readAt: Date | null;
        ticketId: string;
        userId: string;
    };
}>;
export declare function getSupportTickets(userId: string, page: number, limit: number): Promise<{
    tickets: {
        category: string;
        createdAt: Date;
        id: string;
        priority: import("../../generated/prisma/enums.js").SupportTicketPriority;
        status: import("../../generated/prisma/enums.js").SupportTicketStatus;
        subject: string;
        updatedAt: Date;
    }[];
    total: number;
}>;
export declare function getSupportTicket(userId: string, ticketId: string): Promise<{
    ticket: {
        category: string;
        createdAt: Date;
        id: string;
        priority: import("../../generated/prisma/enums.js").SupportTicketPriority;
        status: import("../../generated/prisma/enums.js").SupportTicketStatus;
        subject: string;
        updatedAt: Date;
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
export declare function addSupportMessage(userId: string, ticketId: string, message: string): Promise<{
    createdAt: Date;
    id: string;
    message: string;
    readAt: Date | null;
    ticketId: string;
    userId: string;
}>;
export declare function markSupportMessagesAsRead(userId: string, ticketId: string): Promise<{
    updated: number;
}>;
