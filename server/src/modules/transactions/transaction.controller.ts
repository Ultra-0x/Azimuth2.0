import type { Request, Response } from "express";
import {
  getCardTransaction,
  getCardTransactions,
  getTransaction,
  getTransactions,
} from "./transaction.service.js";
import { transactionFiltersSchema } from "./transaction.schemas.js";

function getParamId(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

// ─────────────────────────────────────────────
// CUSTOMER TRANSACTIONS
// ─────────────────────────────────────────────

export async function getTransactionsController(
  req: Request,
  res: Response,
) {
  if (!req.user) {
    res.status(401).json({
      error: "UNAUTHENTICATED",
      message: "Authentication is required.",
    });
    return;
  }

  const validation = transactionFiltersSchema.safeParse(
    req.query,
  );

  if (!validation.success) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      message: "Invalid transaction filters.",
      details: validation.error.flatten(),
    });
    return;
  }

  try {
    const {
      page,
      limit,
      type,
      status,
      from,
      to,
    } = validation.data;

    const result = await getTransactions(
      req.user.id,
      page,
      limit,
      {
        ...(type !== undefined ? { type } : {}),
        ...(status !== undefined ? { status } : {}),
        ...(from !== undefined ? { from } : {}),
        ...(to !== undefined ? { to } : {}),
      },
    );

    res.status(200).json({
      transactions: result.transactions,
      pagination: {
        page,
        limit,
        total: result.total,
        totalPages: Math.ceil(result.total / limit),
      },
    });
  } catch (error) {
    console.error(
      "Transaction listing error:",
      error,
    );

    res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message:
        "Unable to retrieve transactions at this time.",
    });
  }
}

export async function getTransactionController(
  req: Request,
  res: Response,
) {
  if (!req.user) {
    res.status(401).json({
      error: "UNAUTHENTICATED",
      message: "Authentication is required.",
    });
    return;
  }

  const transactionId = getParamId(
    req.params.transactionId,
  );

  if (!transactionId) {
    res.status(400).json({
      error: "INVALID_TRANSACTION",
      message: "Transaction ID is required.",
    });
    return;
  }

  try {
    const transaction = await getTransaction(
      req.user.id,
      transactionId,
    );

    if (!transaction) {
      res.status(404).json({
        error: "TRANSACTION_NOT_FOUND",
        message: "Transaction not found.",
      });
      return;
    }

    res.status(200).json({
      transaction,
    });
  } catch (error) {
    console.error(
      "Transaction retrieval error:",
      error,
    );

    res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message:
        "Unable to retrieve the transaction at this time.",
    });
  }
}

// ─────────────────────────────────────────────
// CARD TRANSACTIONS
// ─────────────────────────────────────────────

export async function getCardTransactionsController(
  req: Request,
  res: Response,
) {
  if (!req.user) {
    res.status(401).json({
      error: "UNAUTHENTICATED",
      message: "Authentication is required.",
    });
    return;
  }

  const cardId = getParamId(req.params.cardId);

  if (!cardId) {
    res.status(400).json({
      error: "INVALID_CARD",
      message: "Card ID is required.",
    });
    return;
  }

  const validation = transactionFiltersSchema.safeParse(
    req.query,
  );

  if (!validation.success) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      message: "Invalid transaction filters.",
      details: validation.error.flatten(),
    });
    return;
  }

  try {
    const {
      page,
      limit,
      type,
      status,
      from,
      to,
    } = validation.data;

    const result = await getCardTransactions(
      req.user.id,
      cardId,
      page,
      limit,
      {
        ...(type !== undefined ? { type } : {}),
        ...(status !== undefined ? { status } : {}),
        ...(from !== undefined ? { from } : {}),
        ...(to !== undefined ? { to } : {}),
      },
    );

    if (!result) {
      res.status(404).json({
        error: "CARD_NOT_FOUND",
        message: "Card not found.",
      });
      return;
    }

    res.status(200).json({
      transactions: result.transactions,
      pagination: {
        page,
        limit,
        total: result.total,
        totalPages: Math.ceil(result.total / limit),
      },
    });
  } catch (error) {
    console.error(
      "Card transaction listing error:",
      error,
    );

    res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message:
        "Unable to retrieve card transactions at this time.",
    });
  }
}

export async function getCardTransactionController(
  req: Request,
  res: Response,
) {
  if (!req.user) {
    res.status(401).json({
      error: "UNAUTHENTICATED",
      message: "Authentication is required.",
    });
    return;
  }

  const cardId = getParamId(req.params.cardId);
  const transactionId = getParamId(
    req.params.transactionId,
  );

  if (!cardId || !transactionId) {
    res.status(400).json({
      error: "INVALID_TRANSACTION",
      message:
        "Card ID and transaction ID are required.",
    });
    return;
  }

  try {
    const transaction = await getCardTransaction(
      req.user.id,
      cardId,
      transactionId,
    );

    if (!transaction) {
      res.status(404).json({
        error: "TRANSACTION_NOT_FOUND",
        message: "Transaction not found.",
      });
      return;
    }

    res.status(200).json({
      transaction,
    });
  } catch (error) {
    console.error(
      "Card transaction retrieval error:",
      error,
    );

    res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message:
        "Unable to retrieve the transaction at this time.",
    });
  }
}