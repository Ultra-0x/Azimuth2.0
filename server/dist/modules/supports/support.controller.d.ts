import type { Request, Response } from "express";
export declare function createSupportTicketController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getSupportTicketsController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getSupportTicketController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function addSupportMessageController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function markSupportMessagesAsReadController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
