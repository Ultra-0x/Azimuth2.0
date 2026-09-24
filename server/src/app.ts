import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import { env } from "./config/env.js";

import authRoutes from "./modules/auth/auth.routes.js";
import customerRoutes from "./modules/customers/customer.routes.js";
import accountRoutes from "./modules/accounts/accounts.routes.js";
import transferRoutes from "./modules/transfers/transfer.routes.js";
import developmentFundingRoutes from "./modules/accounts/development-funding.routes.js";
import cardRoutes from "./modules/cards/card.routes.js";
import transactionRoutes from "./modules/transactions/transaction.routes.js";
import savingsGoalRoutes from "./modules/savings-goals/savings-goal.routes.js";
import loanRoutes from "./modules/loans/loan.routes.js";
import notificationRoutes from "./modules/notifications/notification.routes.js";
import supportRoutes from "./modules/supports/support.routes.js";
import adminRoutes from "./modules/admins/admin.routes.js";

const app = express();

app.disable("x-powered-by");

app.use(helmet());

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json({ limit: "1mb" }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use("/api/customers", customerRoutes);

app.use("/api/accounts", accountRoutes);

app.use("/api/development-funding", developmentFundingRoutes);

app.use("/api/transfers", transferRoutes);

app.use("/api/cards", cardRoutes);

app.use("/api/transactions", transactionRoutes);

app.use("/api/savings-goals", savingsGoalRoutes);

app.use("/api/loans", loanRoutes);

app.use("/api/notifications", notificationRoutes);

app.use("/api/support", supportRoutes);

app.use("/api/admin", adminRoutes);

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "Azimuth 2.0 API",
    timestamp: new Date().toISOString(),
  });
});

export default app;