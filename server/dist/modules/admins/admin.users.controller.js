"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminUsersController = getAdminUsersController;
exports.updateAdminUserStatusController = updateAdminUserStatusController;
const admin_users_service_js_1 = require("./admin.users.service.js");
const admin_schemas_js_1 = require("./admin.schemas.js");
async function getAdminUsersController(req, res) {
    try {
        const parsed = admin_schemas_js_1.adminUserListSchema.safeParse(req.query);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid query parameters.",
                errors: parsed.error.flatten(),
            });
        }
        const result = await (0, admin_users_service_js_1.getAdminUsers)(parsed.data.page, parsed.data.limit, parsed.data.status);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error("Admin users error:", error);
        return res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve users.",
        });
    }
}
async function updateAdminUserStatusController(req, res) {
    try {
        const parsed = admin_schemas_js_1.updateUserStatusSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid request.",
                errors: parsed.error.flatten(),
            });
        }
        const userId = Array.isArray(req.params.userId)
            ? req.params.userId[0]
            : req.params.userId;
        if (!userId) {
            return res.status(400).json({
                message: "User ID is required.",
            });
        }
        const user = await (0, admin_users_service_js_1.updateAdminUserStatus)(userId, parsed.data.status);
        return res.status(200).json({
            user,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to update user status.";
        return res.status(400).json({
            message,
        });
    }
}
//# sourceMappingURL=admin.users.controller.js.map