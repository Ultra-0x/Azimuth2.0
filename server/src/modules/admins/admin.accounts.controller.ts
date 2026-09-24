import type { Request, Response } from "express";
import { z } from "zod";
import {
  getAdminAccount,
  getAdminAccounts,
} from "./admin.accounts.service.js";

const adminAccountListSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: z
    .enum([
      "ACTIVE",
      "SUSPENDED",
      "CLOSED",
    ])
    .optional(),
});

function getParam(
  value: string | string[] | undefined,
) {
  return Array.isArray(value) ? value[0] : value;
}

export async function getAdminAccountsController(
  req: Request,
  res: Response,
) {
  try {
    const parsed =
      adminAccountListSchema.safeParse(req.query);

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid query parameters.",
        errors: parsed.error.flatten(),
      });
    }

    const result = await getAdminAccounts(
      parsed.data.page,
      parsed.data.limit,
      parsed.data.status,
    );

    return res.status(200).json(result);
  } catch (error) {
    console.error("Admin accounts error:", error);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Unable to retrieve accounts.",
    });
  }
}

export async function getAdminAccountController(
  req: Request,
  res: Response,
) {
  try {
    const accountId = getParam(
      req.params.accountId,
    );

    if (!accountId) {
      return res.status(400).json({
        message: "Account ID is required.",
      });
    }

    const account =
      await getAdminAccount(accountId);

    if (!account) {
      return res.status(404).json({
        message: "Account not found.",
      });
    }

    return res.status(200).json({
      account,
    });
  } catch (error) {
    console.error("Admin account error:", error);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Unable to retrieve account.",
    });
  }
}