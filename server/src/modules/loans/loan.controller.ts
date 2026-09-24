import type { Request, Response } from "express";
import {
  createLoan,
  disburseLoan,
  getLoan,
  getLoans,
  repayLoan,
  updateLoanStatus,
} from "./loan.service.js";
import {
  createLoanSchema,
  loanDisbursementSchema,
  loanListSchema,
  loanRepaymentSchema,
  updateLoanStatusSchema,
} from "./loan.schemas.js";

export async function createLoanController(
  req: Request,
  res: Response,
) {
  try {
    const parsed = createLoanSchema.safeParse(
      req.body,
    );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid request.",
        errors: parsed.error.flatten(),
      });
    }

    const userId = req.user!.id;

    const loan = await createLoan(
      userId,
      parsed.data.accountId,
      parsed.data.amount,
      parsed.data.interestRate,
      parsed.data.termMonths,
      parsed.data.purpose,
    );

    return res.status(201).json({
      loan,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to create loan.";

    return res.status(400).json({
      message,
    });
  }
}

export async function getLoansController(
  req: Request,
  res: Response,
) {
  try {
    const parsed = loanListSchema.safeParse(
      req.query,
    );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid query parameters.",
        errors: parsed.error.flatten(),
      });
    }

    const userId = req.user!.id;

    const result = await getLoans(
      userId,
      parsed.data.page,
      parsed.data.limit,
      parsed.data.status,
    );

    return res.status(200).json(result);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to retrieve loans.";

    return res.status(500).json({
      message,
    });
  }
}

export async function getLoanController(
  req: Request,
  res: Response,
) {
  try {
    const userId = req.user!.id;
    const loanId = Array.isArray(req.params.loanId)
  ? req.params.loanId[0]
  : req.params.loanId;

    if (!loanId) {
      return res.status(400).json({
        message: "Loan ID is required.",
      });
    }

    const loan = await getLoan(
      userId,
      loanId,
    );

    if (!loan) {
      return res.status(404).json({
        message: "Loan not found.",
      });
    }

    return res.status(200).json({
      loan,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to retrieve loan.";

    return res.status(500).json({
      message,
    });
  }
}

export async function updateLoanStatusController(
  req: Request,
  res: Response,
) {
  try {
    const parsed =
      updateLoanStatusSchema.safeParse(
        req.body,
      );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid request.",
        errors: parsed.error.flatten(),
      });
    }

    const loanId = Array.isArray(req.params.loanId)
  ? req.params.loanId[0]
  : req.params.loanId;

    if (!loanId) {
      return res.status(400).json({
        message: "Loan ID is required.",
      });
    }

    const loan = await updateLoanStatus(
      loanId,
      parsed.data.status,
    );

    return res.status(200).json({
      loan,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to update loan status.";

    return res.status(400).json({
      message,
    });
  }
}

export async function disburseLoanController(
  req: Request,
  res: Response,
) {
  try {
    const parsed =
      loanDisbursementSchema.safeParse({
        idempotencyKey:
          req.get("Idempotency-Key"),
      });

    if (!parsed.success) {
      return res.status(400).json({
        message:
          "A valid Idempotency-Key header is required.",
        errors: parsed.error.flatten(),
      });
    }

    const userId = req.user!.id;
    const loanId = Array.isArray(req.params.loanId)
  ? req.params.loanId[0]
  : req.params.loanId;

    if (!loanId) {
      return res.status(400).json({
        message: "Loan ID is required.",
      });
    }

    const result = await disburseLoan(
      userId,
      loanId,
      parsed.data.idempotencyKey,
    );

    return res.status(200).json(result);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to disburse loan.";

    return res.status(400).json({
      message,
    });
  }
}

export async function repayLoanController(
  req: Request,
  res: Response,
) {
  try {
    const parsed =
      loanRepaymentSchema.safeParse(
        req.body,
      );

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid repayment request.",
        errors: parsed.error.flatten(),
      });
    }

    const idempotencyKey =
      req.get("Idempotency-Key");

    if (!idempotencyKey) {
      return res.status(400).json({
        message:
          "Idempotency-Key header is required.",
      });
    }

    const userId = req.user!.id;
    const loanId = Array.isArray(req.params.loanId)
  ? req.params.loanId[0]
  : req.params.loanId;

    if (!loanId) {
      return res.status(400).json({
        message: "Loan ID is required.",
      });
    }

    const result = await repayLoan(
      userId,
      loanId,
      parsed.data.sourceAccountId,
      parsed.data.amount,
      idempotencyKey,
    );

    return res.status(200).json(result);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to process loan repayment.";

    return res.status(400).json({
      message,
    });
  }
}