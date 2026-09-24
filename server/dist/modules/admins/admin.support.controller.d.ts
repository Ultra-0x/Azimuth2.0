import type { Request, Response } from "express";
export declare function getAdminSupportTicketsController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAdminSupportTicketController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function replyToSupportTicketController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateSupportTicketStatusController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
