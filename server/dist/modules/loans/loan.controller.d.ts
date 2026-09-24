import type { Request, Response } from "express";
export declare function createLoanController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getLoansController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getLoanController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateLoanStatusController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function disburseLoanController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function repayLoanController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
