import type { Request, Response } from "express";
export declare function register(req: Request, res: Response): Promise<void>;
export declare function login(req: Request, res: Response): Promise<void>;
export declare function getCurrentUser(req: Request, res: Response): Promise<void>;
export declare function logout(req: Request, res: Response): Promise<void>;
export declare function changePasswordController(req: Request, res: Response): Promise<void>;
export declare function verifyEmailController(req: Request, res: Response): Promise<void>;
export declare function createTransactionAuthController(req: Request, res: Response): Promise<void>;
