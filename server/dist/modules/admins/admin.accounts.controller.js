"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminAccountsController = getAdminAccountsController;
exports.getAdminAccountController = getAdminAccountController;
const zod_1 = require("zod");
const admin_accounts_service_js_1 = require("./admin.accounts.service.js");
const adminAccountListSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().min(1).default(1),
    limit: zod_1.z.coerce.number().int().min(1).max(100).default(20),
    status: zod_1.z
        .enum([
        "ACTIVE",
        "SUSPENDED",
        "CLOSED",
    ])
        .optional(),
});
function getParam(value) {
    return Array.isArray(value) ? value[0] : value;
}
async function getAdminAccountsController(req, res) {
    try {
        const parsed = adminAccountListSchema.safeParse(req.query);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid query parameters.",
                errors: parsed.error.flatten(),
            });
        }
        const result = await (0, admin_accounts_service_js_1.getAdminAccounts)(parsed.data.page, parsed.data.limit, parsed.data.status);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error("Admin accounts error:", error);
        return res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve accounts.",
        });
    }
}
async function getAdminAccountController(req, res) {
    try {
        const accountId = getParam(req.params.accountId);
        if (!accountId) {
            return res.status(400).json({
                message: "Account ID is required.",
            });
        }
        const account = await (0, admin_accounts_service_js_1.getAdminAccount)(accountId);
        if (!account) {
            return res.status(404).json({
                message: "Account not found.",
            });
        }
        return res.status(200).json({
            account,
        });
    }
    catch (error) {
        console.error("Admin account error:", error);
        return res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve account.",
        });
    }
}
//# sourceMappingURL=admin.accounts.controller.js.map