"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccounts = getAccounts;
exports.getAccount = getAccount;
exports.getTransactions = getTransactions;
exports.getTransaction = getTransaction;
const accounts_service_js_1 = require("./accounts.service.js");
const accounts_schemas_js_1 = require("./accounts.schemas.js");
async function getAccounts(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    try {
        const accounts = await (0, accounts_service_js_1.getUserAccounts)(req.user.id);
        res.status(200).json({
            accounts,
        });
    }
    catch (error) {
        console.error("Get accounts error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve your accounts.",
        });
    }
}
async function getAccount(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    const validation = accounts_schemas_js_1.accountIdSchema.safeParse(req.params);
    if (!validation.success) {
        res.status(400).json({
            error: "INVALID_ACCOUNT_ID",
            message: validation.error.issues[0]?.message ??
                "A valid account ID is required.",
        });
        return;
    }
    try {
        const account = await (0, accounts_service_js_1.getUserAccount)(req.user.id, validation.data.id);
        if (!account) {
            res.status(404).json({
                error: "ACCOUNT_NOT_FOUND",
                message: "Account could not be found.",
            });
            return;
        }
        res.status(200).json({
            account,
        });
    }
    catch (error) {
        console.error("Get account error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve the account.",
        });
    }
}
async function getTransactions(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    const accountValidation = accounts_schemas_js_1.accountIdSchema.safeParse(req.params);
    if (!accountValidation.success) {
        res.status(400).json({
            error: "INVALID_ACCOUNT_ID",
            message: accountValidation.error.issues[0]?.message ??
                "A valid account ID is required.",
        });
        return;
    }
    const queryValidation = accounts_schemas_js_1.transactionQuerySchema.safeParse(req.query);
    if (!queryValidation.success) {
        const issue = queryValidation.error.issues[0];
        if (issue?.path[0] === "page" ||
            issue?.path[0] === "limit") {
            res.status(400).json({
                error: "INVALID_PAGINATION",
                message: issue.message,
            });
            return;
        }
        if (issue?.path[0] === "type") {
            res.status(400).json({
                error: "INVALID_TRANSACTION_TYPE",
                message: issue.message,
            });
            return;
        }
        if (issue?.path[0] === "status") {
            res.status(400).json({
                error: "INVALID_TRANSACTION_STATUS",
                message: issue.message,
            });
            return;
        }
        if (issue?.path[0] === "from") {
            res.status(400).json({
                error: issue.code === "custom"
                    ? "INVALID_DATE_RANGE"
                    : "INVALID_FROM_DATE",
                message: issue.message,
            });
            return;
        }
        if (issue?.path[0] === "to") {
            res.status(400).json({
                error: "INVALID_TO_DATE",
                message: issue.message,
            });
            return;
        }
        res.status(400).json({
            error: "VALIDATION_ERROR",
            message: "Invalid transaction query.",
            details: queryValidation.error.flatten(),
        });
        return;
    }
    const { page, limit, type, status, from, to, } = queryValidation.data;
    try {
        const result = await (0, accounts_service_js_1.getAccountTransactions)(req.user.id, accountValidation.data.id, page, limit, {
            ...(type !== undefined ? { type } : {}),
            ...(status !== undefined ? { status } : {}),
            ...(from !== undefined ? { from } : {}),
            ...(to !== undefined ? { to } : {}),
        });
        if (!result) {
            res.status(404).json({
                error: "ACCOUNT_NOT_FOUND",
                message: "Account could not be found.",
            });
            return;
        }
        const totalPages = Math.ceil(result.total / limit);
        res.status(200).json({
            transactions: result.transactions,
            pagination: {
                page,
                limit,
                total: result.total,
                totalPages,
                hasNextPage: page < totalPages,
                hasPreviousPage: page > 1,
            },
            filters: {
                type: type ?? null,
                status: status ?? null,
                from: from ?? null,
                to: to ?? null,
            },
        });
    }
    catch (error) {
        console.error("Get account transactions error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve account transactions.",
        });
    }
}
async function getTransaction(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    const validation = accounts_schemas_js_1.transactionRequestSchema.safeParse(req.params);
    if (!validation.success) {
        res.status(400).json({
            error: "INVALID_TRANSACTION_REQUEST",
            message: validation.error.issues[0]?.message ??
                "Valid account and transaction IDs are required.",
        });
        return;
    }
    try {
        const transaction = await (0, accounts_service_js_1.getAccountTransaction)(req.user.id, validation.data.id, validation.data.transactionId);
        if (!transaction) {
            res.status(404).json({
                error: "TRANSACTION_NOT_FOUND",
                message: "Transaction could not be found.",
            });
            return;
        }
        res.status(200).json({
            transaction,
        });
    }
    catch (error) {
        console.error("Get transaction error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve the transaction.",
        });
    }
}
//# sourceMappingURL=accounts.controller.js.map