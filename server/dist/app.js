"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const env_js_1 = require("./config/env.js");
const auth_routes_js_1 = __importDefault(require("./modules/auth/auth.routes.js"));
const customer_routes_js_1 = __importDefault(require("./modules/customers/customer.routes.js"));
const accounts_routes_js_1 = __importDefault(require("./modules/accounts/accounts.routes.js"));
const transfer_routes_js_1 = __importDefault(require("./modules/transfers/transfer.routes.js"));
const development_funding_routes_js_1 = __importDefault(require("./modules/accounts/development-funding.routes.js"));
const card_routes_js_1 = __importDefault(require("./modules/cards/card.routes.js"));
const transaction_routes_js_1 = __importDefault(require("./modules/transactions/transaction.routes.js"));
const savings_goal_routes_js_1 = __importDefault(require("./modules/savings-goals/savings-goal.routes.js"));
const loan_routes_js_1 = __importDefault(require("./modules/loans/loan.routes.js"));
const notification_routes_js_1 = __importDefault(require("./modules/notifications/notification.routes.js"));
const support_routes_js_1 = __importDefault(require("./modules/supports/support.routes.js"));
const admin_routes_js_1 = __importDefault(require("./modules/admins/admin.routes.js"));
const app = (0, express_1.default)();
app.disable("x-powered-by");
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: env_js_1.env.CLIENT_URL,
    credentials: true,
}));
app.use(express_1.default.json({ limit: "1mb" }));
app.use((0, cookie_parser_1.default)());
app.use("/api/auth", auth_routes_js_1.default);
app.use("/api/customers", customer_routes_js_1.default);
app.use("/api/accounts", accounts_routes_js_1.default);
app.use("/api/development-funding", development_funding_routes_js_1.default);
app.use("/api/transfers", transfer_routes_js_1.default);
app.use("/api/cards", card_routes_js_1.default);
app.use("/api/transactions", transaction_routes_js_1.default);
app.use("/api/savings-goals", savings_goal_routes_js_1.default);
app.use("/api/loans", loan_routes_js_1.default);
app.use("/api/notifications", notification_routes_js_1.default);
app.use("/api/support", support_routes_js_1.default);
app.use("/api/admin", admin_routes_js_1.default);
app.get("/api/health", (_req, res) => {
    res.status(200).json({
        status: "ok",
        service: "Azimuth 2.0 API",
        timestamp: new Date().toISOString(),
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map