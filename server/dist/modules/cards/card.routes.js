"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_js_1 = require("../../middleware/auth.middleware.js");
const card_controller_js_1 = require("./card.controller.js");
const router = (0, express_1.Router)();
router.use(auth_middleware_js_1.requireAuth);
router.post("/", card_controller_js_1.createCardController);
router.get("/", card_controller_js_1.getCardsController);
router.get("/:id", card_controller_js_1.getCardController);
router.patch("/:id/status", card_controller_js_1.updateCardStatusController);
exports.default = router;
//# sourceMappingURL=card.routes.js.map