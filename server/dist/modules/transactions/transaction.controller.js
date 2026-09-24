"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionsController = getTransactionsController;
exports.getTransactionController = getTransactionController;
exports.getCardTransactionsController = getCardTransactionsController;
exports.getCardTransactionController = getCardTransactionController;
const transaction_service_js_1 = require("./transaction.service.js");
const transaction_schemas_js_1 = require("./transaction.schemas.js");
function getParamId(value) {
    return Array.isArray(value) ? value[0] : value;
}
// ─────────────────────────────────────────────
// CUSTOMER TRANSACTIONS
// ─────────────────────────────────────────────
async function getTransactionsController(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    const validation = transaction_schemas_js_1.transactionFiltersSchema.safeParse(req.query);
    if (!validation.success) {
        res.status(400).json({
            error: "VALIDATION_ERROR",
            message: "Invalid transaction filters.",
            details: validation.error.flatten(),
        });
        return;
    }
    try {
        const { page, limit, type, status, from, to, } = validation.data;
        const result = await (0, transaction_service_js_1.getTransactions)(req.user.id, page, limit, {
            ...(type !== undefined ? { type } : {}),
            ...(status !== undefined ? { status } : {}),
            ...(from !== undefined ? { from } : {}),
            ...(to !== undefined ? { to } : {}),
        });
        res.status(200).json({
            transactions: result.transactions,
            pagination: {
                page,
                limit,
                total: result.total,
                totalPages: Math.ceil(result.total / limit),
            },
        });
    }
    catch (error) {
        console.error("Transaction listing error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve transactions at this time.",
        });
    }
}
async function getTransactionController(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    const transactionId = getParamId(req.params.transactionId);
    if (!transactionId) {
        res.status(400).json({
            error: "INVALID_TRANSACTION",
            message: "Transaction ID is required.",
        });
        return;
    }
    try {
        const transaction = await (0, transaction_service_js_1.getTransaction)(req.user.id, transactionId);
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
    }
    catch (error) {
        console.error("Transaction retrieval error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve the transaction at this time.",
        });
    }
}
// ─────────────────────────────────────────────
// CARD TRANSACTIONS
// ─────────────────────────────────────────────
async function getCardTransactionsController(req, res) {
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
    const validation = transaction_schemas_js_1.transactionFiltersSchema.safeParse(req.query);
    if (!validation.success) {
        res.status(400).json({
            error: "VALIDATION_ERROR",
            message: "Invalid transaction filters.",
            details: validation.error.flatten(),
        });
        return;
    }
    try {
        const { page, limit, type, status, from, to, } = validation.data;
        const result = await (0, transaction_service_js_1.getCardTransactions)(req.user.id, cardId, page, limit, {
            ...(type !== undefined ? { type } : {}),
            ...(status !== undefined ? { status } : {}),
            ...(from !== undefined ? { from } : {}),
            ...(to !== undefined ? { to } : {}),
        });
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
    }
    catch (error) {
        console.error("Card transaction listing error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve card transactions at this time.",
        });
    }
}
async function getCardTransactionController(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    const cardId = getParamId(req.params.cardId);
    const transactionId = getParamId(req.params.transactionId);
    if (!cardId || !transactionId) {
        res.status(400).json({
            error: "INVALID_TRANSACTION",
            message: "Card ID and transaction ID are required.",
        });
        return;
    }
    try {
        const transaction = await (0, transaction_service_js_1.getCardTransaction)(req.user.id, cardId, transactionId);
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
    }
    catch (error) {
        console.error("Card transaction retrieval error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve the transaction at this time.",
        });
    }
}
//# sourceMappingURL=transaction.controller.js.map