import type { Request, Response } from "express";
import {
  createTransfer,
  completeAuthenticatedTransfer,
  TransferError,
} from "./transfer.service.js";
import { createTransferSchema } from "./transfer.schemas.js";

export async function createTransferController(
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

  const validation = createTransferSchema.safeParse(
    req.body,
  );

  if (!validation.success) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      message: "Invalid transfer details.",
      details: validation.error.flatten(),
    });
    return;
  }

  try {
    const result = await createTransfer(
      req.user.id,
      validation.data,
    );

    res.status(result.replayed ? 200 : 201).json({
      message: result.replayed
        ? "This transfer request already exists."
        : "Transfer created. Authentication is required before completion.",
      replayed: result.replayed,
      transfer: result.transfer,
    });
  } catch (error) {
    if (error instanceof TransferError) {
      res.status(400).json({
        error: error.code,
        message: error.message,
      });
      return;
    }

    console.error("Transfer creation error:", error);

    res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Unable to create transfer at this time.",
    });
  }
}

export async function authenticateTransferController(
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

  const rawId = req.params.id;

  const transferId = Array.isArray(rawId)
    ? rawId[0]
    : rawId;

  if (!transferId) {
    res.status(400).json({
      error: "INVALID_TRANSFER",
      message: "Transfer ID is required.",
    });
    return;
  }

  const challenge = req.body?.challenge;

  if (
    typeof challenge !== "string" ||
    challenge.length < 32
  ) {
    res.status(400).json({
      error: "INVALID_CHALLENGE",
      message:
        "A valid transaction authentication challenge is required.",
    });
    return;
  }

  try {
    const result =
      await completeAuthenticatedTransfer(
        req.user.id,
        transferId,
        challenge,
      );

    res.status(200).json({
      message: "Transfer completed successfully.",
      transfer: result.transfer,
      transaction: result.transaction,
    });
  } catch (error) {
    console.error("Transfer authentication error:", error);

    res.status(401).json({
      error: "TRANSFER_AUTHENTICATION_FAILED",
      message:
        "Transfer authentication failed. Please request a new authentication challenge and try again.",
    });
  }
}