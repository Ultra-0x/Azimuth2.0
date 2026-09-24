"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoanController = createLoanController;
exports.getLoansController = getLoansController;
exports.getLoanController = getLoanController;
exports.updateLoanStatusController = updateLoanStatusController;
exports.disburseLoanController = disburseLoanController;
exports.repayLoanController = repayLoanController;
const loan_service_js_1 = require("./loan.service.js");
const loan_schemas_js_1 = require("./loan.schemas.js");
async function createLoanController(req, res) {
    try {
        const parsed = loan_schemas_js_1.createLoanSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid request.",
                errors: parsed.error.flatten(),
            });
        }
        const userId = req.user.id;
        const loan = await (0, loan_service_js_1.createLoan)(userId, parsed.data.accountId, parsed.data.amount, parsed.data.interestRate, parsed.data.termMonths, parsed.data.purpose);
        return res.status(201).json({
            loan,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to create loan.";
        return res.status(400).json({
            message,
        });
    }
}
async function getLoansController(req, res) {
    try {
        const parsed = loan_schemas_js_1.loanListSchema.safeParse(req.query);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid query parameters.",
                errors: parsed.error.flatten(),
            });
        }
        const userId = req.user.id;
        const result = await (0, loan_service_js_1.getLoans)(userId, parsed.data.page, parsed.data.limit, parsed.data.status);
        return res.status(200).json(result);
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to retrieve loans.";
        return res.status(500).json({
            message,
        });
    }
}
async function getLoanController(req, res) {
    try {
        const userId = req.user.id;
        const loanId = Array.isArray(req.params.loanId)
            ? req.params.loanId[0]
            : req.params.loanId;
        if (!loanId) {
            return res.status(400).json({
                message: "Loan ID is required.",
            });
        }
        const loan = await (0, loan_service_js_1.getLoan)(userId, loanId);
        if (!loan) {
            return res.status(404).json({
                message: "Loan not found.",
            });
        }
        return res.status(200).json({
            loan,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to retrieve loan.";
        return res.status(500).json({
            message,
        });
    }
}
async function updateLoanStatusController(req, res) {
    try {
        const parsed = loan_schemas_js_1.updateLoanStatusSchema.safeParse(req.body);
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
        const loan = await (0, loan_service_js_1.updateLoanStatus)(loanId, parsed.data.status);
        return res.status(200).json({
            loan,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to update loan status.";
        return res.status(400).json({
            message,
        });
    }
}
async function disburseLoanController(req, res) {
    try {
        const parsed = loan_schemas_js_1.loanDisbursementSchema.safeParse({
            idempotencyKey: req.get("Idempotency-Key"),
        });
        if (!parsed.success) {
            return res.status(400).json({
                message: "A valid Idempotency-Key header is required.",
                errors: parsed.error.flatten(),
            });
        }
        const userId = req.user.id;
        const loanId = Array.isArray(req.params.loanId)
            ? req.params.loanId[0]
            : req.params.loanId;
        if (!loanId) {
            return res.status(400).json({
                message: "Loan ID is required.",
            });
        }
        const result = await (0, loan_service_js_1.disburseLoan)(userId, loanId, parsed.data.idempotencyKey);
        return res.status(200).json(result);
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to disburse loan.";
        return res.status(400).json({
            message,
        });
    }
}
async function repayLoanController(req, res) {
    try {
        const parsed = loan_schemas_js_1.loanRepaymentSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid repayment request.",
                errors: parsed.error.flatten(),
            });
        }
        const idempotencyKey = req.get("Idempotency-Key");
        if (!idempotencyKey) {
            return res.status(400).json({
                message: "Idempotency-Key header is required.",
            });
        }
        const userId = req.user.id;
        const loanId = Array.isArray(req.params.loanId)
            ? req.params.loanId[0]
            : req.params.loanId;
        if (!loanId) {
            return res.status(400).json({
                message: "Loan ID is required.",
            });
        }
        const result = await (0, loan_service_js_1.repayLoan)(userId, loanId, parsed.data.sourceAccountId, parsed.data.amount, idempotencyKey);
        return res.status(200).json(result);
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to process loan repayment.";
        return res.status(400).json({
            message,
        });
    }
}
//# sourceMappingURL=loan.controller.js.map