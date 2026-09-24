"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const development_funding_service_js_1 = require("./development-funding.service.js");
const router = (0, express_1.Router)();
router.post("/fund", async (req, res) => {
    if (process.env.NODE_ENV === "production") {
        res.status(404).json({
            error: "NOT_FOUND",
            message: "Route not available.",
        });
        return;
    }
    const { accountId, amount, description } = req.body ?? {};
    if (typeof accountId !== "string" ||
        accountId.trim().length === 0) {
        res.status(400).json({
            error: "INVALID_ACCOUNT_ID",
            message: "A valid account ID is required.",
        });
        return;
    }
    if (typeof amount !== "string" ||
        !/^\d+(\.\d{1,4})?$/.test(amount) ||
        Number(amount) <= 0) {
        res.status(400).json({
            error: "INVALID_AMOUNT",
            message: "Amount must be a valid positive monetary value.",
        });
        return;
    }
    try {
        const result = await (0, development_funding_service_js_1.developmentFundAccount)(accountId.trim(), amount, typeof description === "string" && description.trim()
            ? description.trim()
            : undefined);
        res.status(201).json({
            message: "Development funding completed.",
            funding: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to fund account.";
        res.status(400).json({
            error: "DEVELOPMENT_FUNDING_FAILED",
            message,
        });
    }
});
exports.default = router;
//# sourceMappingURL=development-funding.routes.js.map