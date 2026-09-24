"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminTransactionsController = getAdminTransactionsController;
exports.getAdminTransactionController = getAdminTransactionController;
exports.createAdminTransferController = createAdminTransferController;
const zod_1 = require("zod");
const admin_transactions_service_js_1 = require("./admin.transactions.service.js");
const adminTransactionListSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().min(1).default(1),
    limit: zod_1.z.coerce.number().int().min(1).max(100).default(20),
    status: zod_1.z
        .enum([
        "PENDING",
        "PROCESSING",
        "COMPLETED",
        "FAILED",
        "REVERSED",
        "CANCELLED",
    ])
        .optional(),
    type: zod_1.z
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
const adminTransferSchema = zod_1.z.object({
    fromAccountId: zod_1.z.string().min(1).optional(),
    toAccountId: zod_1.z.string().min(1),
    amount: zod_1.z.coerce.number().positive(),
    currency: zod_1.z.string().min(3).max(3).default("USD"),
    description: zod_1.z.string().max(500).optional(),
    idempotencyKey: zod_1.z.string().min(10).max(100),
});
function getParam(value) {
    return Array.isArray(value) ? value[0] : value;
}
async function getAdminTransactionsController(req, res) {
    try {
        const parsed = adminTransactionListSchema.safeParse(req.query);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid query parameters.",
                errors: parsed.error.flatten(),
            });
        }
        const result = await (0, admin_transactions_service_js_1.getAdminTransactions)(parsed.data.page, parsed.data.limit, parsed.data.status, parsed.data.type);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error("Admin transactions error:", error);
        return res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve transactions.",
        });
    }
}
async function getAdminTransactionController(req, res) {
    try {
        const transactionId = getParam(req.params.transactionId);
        if (!transactionId) {
            return res.status(400).json({
                message: "Transaction ID is required.",
            });
        }
        const transaction = await (0, admin_transactions_service_js_1.getAdminTransaction)(transactionId);
        if (!transaction) {
            return res.status(404).json({
                message: "Transaction not found.",
            });
        }
        return res.status(200).json({
            transaction,
        });
    }
    catch (error) {
        console.error("Admin transaction error:", error);
        return res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve transaction.",
        });
    }
}
async function createAdminTransferController(req, res) {
    try {
        if (!req.user?.id) {
            return res.status(401).json({
                message: "Authentication required.",
            });
        }
        const parsed = adminTransferSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid transfer request.",
                errors: parsed.error.flatten(),
            });
        }
        if (parsed.data.fromAccountId &&
            parsed.data.fromAccountId === parsed.data.toAccountId) {
            return res.status(400).json({
                message: "Source and destination accounts must be different.",
            });
        }
        const transaction = await (0, admin_transactions_service_js_1.createAdminTransfer)({
            adminId: req.user.id,
            ...(parsed.data.fromAccountId
                ? {
                    fromAccountId: parsed.data.fromAccountId,
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
            idempotencyKey: parsed.data.idempotencyKey,
        });
        return res.status(201).json({
            message: "Administrative transfer completed successfully.",
            transaction,
        });
    }
    catch (error) {
        console.error("Admin transfer error:", error);
        return res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Unable to complete administrative transfer.",
        });
    }
}
//# sourceMappingURL=admin.transactions.controller.js.map