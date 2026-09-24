"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminOverviewController = getAdminOverviewController;
const admin_service_js_1 = require("./admin.service.js");
async function getAdminOverviewController(_req, res) {
    try {
        const overview = await (0, admin_service_js_1.getAdminOverview)();
        return res.status(200).json(overview);
    }
    catch (error) {
        console.error("Admin overview error:", error);
        return res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve admin overview.",
        });
    }
}
//# sourceMappingURL=admin.controller.js.map