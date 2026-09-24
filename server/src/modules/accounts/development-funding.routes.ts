import { Router } from "express";
import { developmentFundAccount } from "./development-funding.service.js";

const router = Router();

router.post("/fund", async (req, res) => {
  if (process.env.NODE_ENV === "production") {
    res.status(404).json({
      error: "NOT_FOUND",
      message: "Route not available.",
    });
    return;
  }

  const { accountId, amount, description } = req.body ?? {};

  if (
    typeof accountId !== "string" ||
    accountId.trim().length === 0
  ) {
    res.status(400).json({
      error: "INVALID_ACCOUNT_ID",
      message: "A valid account ID is required.",
    });
    return;
  }

  if (
    typeof amount !== "string" ||
    !/^\d+(\.\d{1,4})?$/.test(amount) ||
    Number(amount) <= 0
  ) {
    res.status(400).json({
      error: "INVALID_AMOUNT",
      message: "Amount must be a valid positive monetary value.",
    });
    return;
  }

  try {
    const result = await developmentFundAccount(
      accountId.trim(),
      amount,
      typeof description === "string" && description.trim()
        ? description.trim()
        : undefined,
    );

    res.status(201).json({
      message: "Development funding completed.",
      funding: result,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to fund account.";

    res.status(400).json({
      error: "DEVELOPMENT_FUNDING_FAILED",
      message,
    });
  }
});

export default router;