import type { Request, Response } from "express";
export declare function getNotificationsController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getUnreadNotificationCountController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function markNotificationAsReadController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function markAllNotificationsAsReadController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
