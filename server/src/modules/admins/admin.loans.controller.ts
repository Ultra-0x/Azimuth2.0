import type { Request, Response } from "express";
import { z } from "zod";
import {
  getAdminLoan,
  getAdminLoans,
  updateAdminLoanStatus,
  disburseAdminLoan,
} from "./admin.loans.service.js";

const adminLoanListSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: z
    .enum([
      "PENDING",
      "APPROVED",
      "ACTIVE",
      "PAID",
      "REJECTED",
      "DEFAULTED",
      "CANCELLED",
    ])
    .optional(),
});

const adminLoanStatusSchema = z.object({
  status: z.enum(["APPROVED", "REJECTED"]),
});

const adminLoanDisbursementSchema = z.object({
  idempotencyKey: z.string().min(10).max(100),
});

function getParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export async function getAdminLoansController(
  req: Request,
  res: Response,
) {
  try {
    const parsed = adminLoanListSchema.safeParse(req.query);

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid query parameters.",
        errors: parsed.error.flatten(),
      });
    }

    const result = await getAdminLoans(
      parsed.data.page,
      parsed.data.limit,
      parsed.data.status,
    );

    return res.status(200).json(result);
  } catch (error) {
    console.error("Admin loans error:", error);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Unable to retrieve loans.",
    });
  }
}

export async function getAdminLoanController(
  req: Request,
  res: Response,
) {
  try {
    const loanId = getParam(req.params.loanId);

    if (!loanId) {
      return res.status(400).json({
        message: "Loan ID is required.",
      });
    }

    const loan = await getAdminLoan(loanId);

    if (!loan) {
      return res.status(404).json({
        message: "Loan not found.",
      });
    }

    return res.status(200).json({ loan });
  } catch (error) {
    console.error("Admin loan error:", error);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Unable to retrieve loan.",
    });
  }
}

export async function updateAdminLoanStatusController(
  req: Request,
  res: Response,
) {
  try {
    const loanId = getParam(req.params.loanId);

    if (!loanId) {
      return res.status(400).json({
        message: "Loan ID is required.",
      });
    }

    const parsed = adminLoanStatusSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid loan status.",
        errors: parsed.error.flatten(),
      });
    }

    const loan = await updateAdminLoanStatus(
      loanId,
      parsed.data.status,
    );

    return res.status(200).json({
      message:
        parsed.data.status === "APPROVED"
          ? "Loan approved successfully."
          : "Loan rejected successfully.",
      loan,
    });
  } catch (error) {
    console.error(
      "Admin loan status error:",
      error,
    );

    return res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Unable to update loan.",
    });
  }
}

export async function disburseAdminLoanController(
  req: Request,
  res: Response,
) {
  try {
    const loanId = getParam(req.params.loanId);

    if (!loanId) {
      return res.status(400).json({
        message: "Loan ID is required.",
      });
    }

    if (!req.user?.id) {
      return res.status(401).json({
        message: "Authentication required.",
      });
    }

    const parsed =
      adminLoanDisbursementSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid disbursement request.",
        errors: parsed.error.flatten(),
      });
    }

    const transaction = await disburseAdminLoan(
      loanId,
      req.user.id,
      parsed.data.idempotencyKey,
    );

    return res.status(200).json({
      message: "Loan disbursed successfully.",
      transaction,
    });
  } catch (error) {
    console.error(
      "Admin loan disbursement error:",
      error,
    );

    return res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Unable to disburse loan.",
    });
  }
}