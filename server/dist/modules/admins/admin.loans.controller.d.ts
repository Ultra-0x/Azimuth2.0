import type { Request, Response } from "express";
export declare function getAdminLoansController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAdminLoanController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateAdminLoanStatusController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function disburseAdminLoanController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
