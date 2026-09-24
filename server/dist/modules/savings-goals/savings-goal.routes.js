"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_js_1 = require("../../middleware/auth.middleware.js");
const savings_goal_controller_js_1 = require("./savings-goal.controller.js");
const router = (0, express_1.Router)();
router.use(auth_middleware_js_1.requireAuth);
router.post("/", savings_goal_controller_js_1.createSavingsGoalController);
router.get("/", savings_goal_controller_js_1.getSavingsGoalsController);
router.get("/:goalId", savings_goal_controller_js_1.getSavingsGoalController);
router.patch("/:goalId", savings_goal_controller_js_1.updateSavingsGoalController);
router.patch("/:goalId/status", savings_goal_controller_js_1.updateSavingsGoalStatusController);
router.post("/:goalId/contributions", savings_goal_controller_js_1.contributeToSavingsGoalController);
exports.default = router;
//# sourceMappingURL=savings-goal.routes.js.map