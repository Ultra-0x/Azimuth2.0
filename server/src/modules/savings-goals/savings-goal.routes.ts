import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import {
  contributeToSavingsGoalController,
  createSavingsGoalController,
  getSavingsGoalController,
  getSavingsGoalsController,
  updateSavingsGoalController,
  updateSavingsGoalStatusController,
} from "./savings-goal.controller.js";

const router = Router();

router.use(requireAuth);

router.post("/", createSavingsGoalController);
router.get("/", getSavingsGoalsController);

router.get("/:goalId", getSavingsGoalController);
router.patch("/:goalId", updateSavingsGoalController);
router.patch(
  "/:goalId/status",
  updateSavingsGoalStatusController,
);

router.post(
  "/:goalId/contributions",
  contributeToSavingsGoalController,
);

export default router;