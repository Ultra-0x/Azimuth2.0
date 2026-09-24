export declare function createNotification(userId: string, type: string, title: string, message: string): Promise<{
    createdAt: Date;
    id: string;
    message: string;
    readAt: Date | null;
    title: string;
    type: string;
}>;
export declare function getNotifications(userId: string, page: number, limit: number, unreadOnly?: boolean): Promise<{
    notifications: {
        createdAt: Date;
        id: string;
        message: string;
        readAt: Date | null;
        title: string;
        type: string;
    }[];
    total: number;
}>;
export declare function markNotificationAsRead(userId: string, notificationId: string): Promise<{
    id: string;
    readAt: Date | null;
}>;
export declare function markAllNotificationsAsRead(userId: string): Promise<{
    updated: number;
}>;
export declare function getUnreadNotificationCount(userId: string): Promise<number>;
