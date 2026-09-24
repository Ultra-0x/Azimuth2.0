import type { Request, Response } from "express";
import {
  contributeToSavingsGoal,
  createSavingsGoal,
  getSavingsGoal,
  getSavingsGoals,
  updateSavingsGoal,
  updateSavingsGoalStatus,
} from "./savings-goal.service.js";
import {
  createSavingsGoalSchema,
  savingsGoalListSchema,
  updateSavingsGoalSchema,
  updateSavingsGoalStatusSchema,
} from "./savings-goal.schemas.js";

function getParamId(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function getIdempotencyKey(req: Request) {
  const value = req.header("Idempotency-Key");

  return value?.trim() || undefined;
}

export async function createSavingsGoalController(
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

  const validation = createSavingsGoalSchema.safeParse(
    req.body,
  );

  if (!validation.success) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      message: "Invalid savings goal data.",
      details: validation.error.flatten(),
    });
    return;
  }

  try {
    const {
      accountId,
      name,
      targetAmount,
      targetDate,
    } = validation.data;

    const goal = await createSavingsGoal(
      req.user.id,
      accountId,
      name,
      targetAmount,
      targetDate,
    );

    res.status(201).json({
      message: "Savings goal created successfully.",
      goal,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      (
        error.message === "Account not found." ||
        error.message ===
          "Savings goals can only be linked to savings accounts." ||
        error.message ===
          "The savings account must be active."
      )
    ) {
      res.status(400).json({
        error: "INVALID_SAVINGS_ACCOUNT",
        message: error.message,
      });
      return;
    }

    console.error(
      "Savings goal creation error:",
      error,
    );

    res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message:
        "Unable to create the savings goal at this time.",
    });
  }
}

export async function getSavingsGoalsController(
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

  const validation = savingsGoalListSchema.safeParse(
    req.query,
  );

  if (!validation.success) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      message: "Invalid savings goal filters.",
      details: validation.error.flatten(),
    });
    return;
  }

  try {
    const {
      page,
      limit,
      status,
    } = validation.data;

    const result = await getSavingsGoals(
      req.user.id,
      page,
      limit,
      {
        ...(status !== undefined ? { status } : {}),
      },
    );

    res.status(200).json({
      goals: result.goals,
      pagination: {
        page,
        limit,
        total: result.total,
        totalPages: Math.ceil(
          result.total / limit,
        ),
      },
    });
  } catch (error) {
    console.error(
      "Savings goal listing error:",
      error,
    );

    res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message:
        "Unable to retrieve savings goals at this time.",
    });
  }
}

export async function getSavingsGoalController(
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

  const goalId = getParamId(req.params.goalId);

  if (!goalId) {
    res.status(400).json({
      error: "INVALID_GOAL",
      message: "Savings goal ID is required.",
    });
    return;
  }

  try {
    const goal = await getSavingsGoal(
      req.user.id,
      goalId,
    );

    if (!goal) {
      res.status(404).json({
        error: "GOAL_NOT_FOUND",
        message: "Savings goal not found.",
      });
      return;
    }

    res.status(200).json({
      goal,
    });
  } catch (error) {
    console.error(
      "Savings goal retrieval error:",
      error,
    );

    res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message:
        "Unable to retrieve the savings goal at this time.",
    });
  }
}

export async function updateSavingsGoalController(
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

  const goalId = getParamId(req.params.goalId);

  if (!goalId) {
    res.status(400).json({
      error: "INVALID_GOAL",
      message: "Savings goal ID is required.",
    });
    return;
  }

  const validation = updateSavingsGoalSchema.safeParse(
    req.body,
  );

  if (!validation.success) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      message: "Invalid savings goal update.",
      details: validation.error.flatten(),
    });
    return;
  }

  try {
    const goal = await updateSavingsGoal(
  req.user.id,
  goalId,
  {
    ...(validation.data.name !== undefined
      ? { name: validation.data.name }
      : {}),
    ...(validation.data.targetAmount !== undefined
      ? { targetAmount: validation.data.targetAmount }
      : {}),
    ...(validation.data.targetDate !== undefined
      ? { targetDate: validation.data.targetDate }
      : {}),
  },
);

    res.status(200).json({
      message: "Savings goal updated successfully.",
      goal,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      (
        error.message === "Savings goal not found." ||
        error.message ===
          "This savings goal cannot be updated." ||
        error.message ===
          "Target amount must be greater than the current saved amount."
      )
    ) {
      res.status(400).json({
        error: "INVALID_SAVINGS_GOAL",
        message: error.message,
      });
      return;
    }

    console.error(
      "Savings goal update error:",
      error,
    );

    res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message:
        "Unable to update the savings goal at this time.",
    });
  }
}

export async function updateSavingsGoalStatusController(
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

  const goalId = getParamId(req.params.goalId);

  if (!goalId) {
    res.status(400).json({
      error: "INVALID_GOAL",
      message: "Savings goal ID is required.",
    });
    return;
  }

  const validation =
    updateSavingsGoalStatusSchema.safeParse(
      req.body,
    );

  if (!validation.success) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      message: "Invalid savings goal status.",
      details: validation.error.flatten(),
    });
    return;
  }

  try {
    const goal = await updateSavingsGoalStatus(
      req.user.id,
      goalId,
      validation.data.status,
    );

    res.status(200).json({
      message: "Savings goal status updated successfully.",
      goal,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      (
        error.message === "Savings goal not found." ||
        error.message ===
          "A completed savings goal cannot be changed." ||
        error.message ===
          "A cancelled savings goal cannot be resumed."
      )
    ) {
      res.status(400).json({
        error: "INVALID_SAVINGS_GOAL_STATUS",
        message: error.message,
      });
      return;
    }

    console.error(
      "Savings goal status update error:",
      error,
    );

    res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message:
        "Unable to update the savings goal status at this time.",
    });
  }
}

export async function contributeToSavingsGoalController(
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

  const goalId = getParamId(req.params.goalId);

  if (!goalId) {
    res.status(400).json({
      error: "INVALID_GOAL",
      message: "Savings goal ID is required.",
    });
    return;
  }

  const idempotencyKey =
    getIdempotencyKey(req);

  if (!idempotencyKey) {
    res.status(400).json({
      error: "IDEMPOTENCY_KEY_REQUIRED",
      message:
        "Idempotency-Key header is required for savings goal contributions.",
    });
    return;
  }

  const body = req.body as {
    sourceAccountId?: unknown;
    amount?: unknown;
  };

  if (
    typeof body.sourceAccountId !== "string" ||
    body.sourceAccountId.trim().length === 0
  ) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      message: "Source account ID is required.",
    });
    return;
  }

  const amount = Number(body.amount);

  if (
    !Number.isFinite(amount) ||
    amount <= 0
  ) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      message:
        "Contribution amount must be greater than zero.",
    });
    return;
  }

  try {
    const result =
      await contributeToSavingsGoal(
        req.user.id,
        goalId,
        body.sourceAccountId.trim(),
        amount,
        idempotencyKey,
      );

    res.status(
      result.idempotent ? 200 : 201,
    ).json({
      message: result.idempotent
        ? "Savings goal contribution already processed."
        : "Savings goal contribution completed successfully.",
      transaction: result.transaction,
      contribution: result.contribution,
      goal: result.goal,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      (
        error.message ===
          "Savings goal not found." ||
        error.message ===
          "Only active savings goals can receive contributions." ||
        error.message ===
          "Source account not found." ||
        error.message ===
          "The source account must be active." ||
        error.message ===
          "Source account and savings goal currencies must match." ||
        error.message ===
          "The source account cannot be the savings goal account." ||
        error.message ===
          "Insufficient funds." ||
        error.message ===
          "This idempotency key has already been used." ||
        error.message ===
          "Unable to lock the required accounts."
      )
    ) {
      res.status(400).json({
        error: "INVALID_SAVINGS_GOAL_CONTRIBUTION",
        message: error.message,
      });
      return;
    }

    console.error(
      "Savings goal contribution error:",
      error,
    );

    res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message:
        "Unable to process the savings goal contribution at this time.",
    });
  }
}