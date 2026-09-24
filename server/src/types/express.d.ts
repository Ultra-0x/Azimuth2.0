import type {
  UserRole,
  UserStatus,
} from "../generated/prisma/client.js";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        status: UserStatus;
        role: UserRole;
      };

      session?: {
        id: string;
        expiresAt: Date;
      };
    }
  }
}

export {};