import type { Request, Response } from "express";
import {
  getAdminUsers,
  updateAdminUserStatus,
} from "./admin.users.service.js";
import {
  adminUserListSchema,
  updateUserStatusSchema,
} from "./admin.schemas.js";

export async function getAdminUsersController(
  req: Request,
  res: Response,
) {
  try {
    const parsed = adminUserListSchema.safeParse(
      req.query,
    );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid query parameters.",
        errors: parsed.error.flatten(),
      });
    }

    const result = await getAdminUsers(
      parsed.data.page,
      parsed.data.limit,
      parsed.data.status,
    );

    return res.status(200).json(result);
  } catch (error) {
    console.error("Admin users error:", error);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Unable to retrieve users.",
    });
  }
}

export async function updateAdminUserStatusController(
  req: Request,
  res: Response,
) {
  try {
    const parsed = updateUserStatusSchema.safeParse(
      req.body,
    );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid request.",
        errors: parsed.error.flatten(),
      });
    }

    const userId = Array.isArray(req.params.userId)
      ? req.params.userId[0]
      : req.params.userId;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required.",
      });
    }

    const user = await updateAdminUserStatus(
      userId,
      parsed.data.status,
    );

    return res.status(200).json({
      user,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to update user status.";

    return res.status(400).json({
      message,
    });
  }
}