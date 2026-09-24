import type { Request, Response } from "express";
import { z } from "zod";
import {
  createAdminTransfer,
  getAdminTransaction,
  getAdminTransactions,
} from "./admin.transactions.service.js";

const adminTransactionListSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: z
    .enum([
      "PENDING",
      "PROCESSING",
      "COMPLETED",
      "FAILED",
      "REVERSED",
      "CANCELLED",
    ])
    .optional(),
  type: z
    .enum([
      "DEPOSIT",
      "WITHDRAWAL",
      "TRANSFER",
      "PAYMENT",
      "REFUND",
      "FEE",
      "INTEREST",
      "LOAN_DISBURSEMENT",
      "LOAN_REPAYMENT",
    ])
    .optional(),
});

const adminTransferSchema = z.object({
  fromAccountId: z.string().min(1).optional(),
  toAccountId: z.string().min(1),
  amount: z.coerce.number().positive(),
  currency: z.string().min(3).max(3).default("USD"),
  description: z.string().max(500).optional(),
  idempotencyKey: z.string().min(10).max(100),
});

function getParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export async function getAdminTransactionsController(
  req: Request,
  res: Response,
) {
  try {
    const parsed = adminTransactionListSchema.safeParse(req.query);

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid query parameters.",
        errors: parsed.error.flatten(),
      });
    }

    const result = await getAdminTransactions(
      parsed.data.page,
      parsed.data.limit,
      parsed.data.status,
      parsed.data.type,
    );

    return res.status(200).json(result);
  } catch (error) {
    console.error("Admin transactions error:", error);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Unable to retrieve transactions.",
    });
  }
}

export async function getAdminTransactionController(
  req: Request,
  res: Response,
) {
  try {
    const transactionId = getParam(
      req.params.transactionId,
    );

    if (!transactionId) {
      return res.status(400).json({
        message: "Transaction ID is required.",
      });
    }

    const transaction =
      await getAdminTransaction(transactionId);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found.",
      });
    }

    return res.status(200).json({
      transaction,
    });
  } catch (error) {
    console.error("Admin transaction error:", error);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Unable to retrieve transaction.",
    });
  }
}

export async function createAdminTransferController(
  req: Request,
  res: Response,
) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({
        message: "Authentication required.",
      });
    }

    const parsed = adminTransferSchema.safeParse(
      req.body,
    );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid transfer request.",
        errors: parsed.error.flatten(),
      });
    }

    if (
      parsed.data.fromAccountId &&
      parsed.data.fromAccountId === parsed.data.toAccountId
    ) {
      return res.status(400).json({
        message:
          "Source and destination accounts must be different.",
      });
    }

    const transaction = await createAdminTransfer({
  adminId: req.user.id,
  ...(parsed.data.fromAccountId
    ? {
        fromAccountId:
          parsed.data.fromAccountId,
      }
    : {}),
  toAccountId: parsed.data.toAccountId,
  amount: parsed.data.amount,
  currency: parsed.data.currency,
  ...(parsed.data.description
    ? {
        description: parsed.data.description,
      }
    : {}),
  idempotencyKey:
    parsed.data.idempotencyKey,
});

    return res.status(201).json({
      message: "Administrative transfer completed successfully.",
      transaction,
    });
  } catch (error) {
    console.error(
      "Admin transfer error:",
      error,
    );

    return res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Unable to complete administrative transfer.",
    });
  }
}