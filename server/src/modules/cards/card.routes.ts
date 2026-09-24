import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import {
  createCardController,
  getCardsController,
  getCardController,
  updateCardStatusController,
} from "./card.controller.js";

const router = Router();

router.use(requireAuth);

router.post("/", createCardController);

router.get("/", getCardsController);

router.get("/:id", getCardController);

router.patch("/:id/status", updateCardStatusController);

export default router;