"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminLoansController = getAdminLoansController;
exports.getAdminLoanController = getAdminLoanController;
exports.updateAdminLoanStatusController = updateAdminLoanStatusController;
exports.disburseAdminLoanController = disburseAdminLoanController;
const zod_1 = require("zod");
const admin_loans_service_js_1 = require("./admin.loans.service.js");
const adminLoanListSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().min(1).default(1),
    limit: zod_1.z.coerce.number().int().min(1).max(100).default(20),
    status: zod_1.z
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
const adminLoanStatusSchema = zod_1.z.object({
    status: zod_1.z.enum(["APPROVED", "REJECTED"]),
});
const adminLoanDisbursementSchema = zod_1.z.object({
    idempotencyKey: zod_1.z.string().min(10).max(100),
});
function getParam(value) {
    return Array.isArray(value) ? value[0] : value;
}
async function getAdminLoansController(req, res) {
    try {
        const parsed = adminLoanListSchema.safeParse(req.query);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid query parameters.",
                errors: parsed.error.flatten(),
            });
        }
        const result = await (0, admin_loans_service_js_1.getAdminLoans)(parsed.data.page, parsed.data.limit, parsed.data.status);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error("Admin loans error:", error);
        return res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve loans.",
        });
    }
}
async function getAdminLoanController(req, res) {
    try {
        const loanId = getParam(req.params.loanId);
        if (!loanId) {
            return res.status(400).json({
                message: "Loan ID is required.",
            });
        }
        const loan = await (0, admin_loans_service_js_1.getAdminLoan)(loanId);
        if (!loan) {
            return res.status(404).json({
                message: "Loan not found.",
            });
        }
        return res.status(200).json({ loan });
    }
    catch (error) {
        console.error("Admin loan error:", error);
        return res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve loan.",
        });
    }
}
async function updateAdminLoanStatusController(req, res) {
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
        const loan = await (0, admin_loans_service_js_1.updateAdminLoanStatus)(loanId, parsed.data.status);
        return res.status(200).json({
            message: parsed.data.status === "APPROVED"
                ? "Loan approved successfully."
                : "Loan rejected successfully.",
            loan,
        });
    }
    catch (error) {
        console.error("Admin loan status error:", error);
        return res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Unable to update loan.",
        });
    }
}
async function disburseAdminLoanController(req, res) {
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
        const parsed = adminLoanDisbursementSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid disbursement request.",
                errors: parsed.error.flatten(),
            });
        }
        const transaction = await (0, admin_loans_service_js_1.disburseAdminLoan)(loanId, req.user.id, parsed.data.idempotencyKey);
        return res.status(200).json({
            message: "Loan disbursed successfully.",
            transaction,
        });
    }
    catch (error) {
        console.error("Admin loan disbursement error:", error);
        return res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Unable to disburse loan.",
        });
    }
}
//# sourceMappingURL=admin.loans.controller.js.map