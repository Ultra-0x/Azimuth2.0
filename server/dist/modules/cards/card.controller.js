"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCardController = createCardController;
exports.getCardsController = getCardsController;
exports.getCardController = getCardController;
exports.updateCardStatusController = updateCardStatusController;
const card_service_js_1 = require("./card.service.js");
const card_schemas_js_1 = require("./card.schemas.js");
async function createCardController(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    const validation = card_schemas_js_1.createCardSchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json({
            error: "VALIDATION_ERROR",
            message: "Invalid card details.",
            details: validation.error.flatten(),
        });
        return;
    }
    try {
        const result = await (0, card_service_js_1.createCard)(req.user.id, validation.data.accountId, validation.data.type);
        res.status(201).json({
            message: "Card created successfully.",
            card: result.card,
            cardNumber: result.cardNumber,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                error: "CARD_CREATION_FAILED",
                message: error.message,
            });
            return;
        }
        console.error("Card creation error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to create card at this time.",
        });
    }
}
async function getCardsController(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    try {
        const cards = await (0, card_service_js_1.getUserCards)(req.user.id);
        res.status(200).json({
            cards,
        });
    }
    catch (error) {
        console.error("Card listing error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve cards at this time.",
        });
    }
}
async function getCardController(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    const rawId = req.params.id;
    const cardId = Array.isArray(rawId)
        ? rawId[0]
        : rawId;
    if (!cardId) {
        res.status(400).json({
            error: "INVALID_CARD",
            message: "Card ID is required.",
        });
        return;
    }
    try {
        const card = await (0, card_service_js_1.getUserCard)(req.user.id, cardId);
        if (!card) {
            res.status(404).json({
                error: "CARD_NOT_FOUND",
                message: "Card not found.",
            });
            return;
        }
        res.status(200).json({
            card,
        });
    }
    catch (error) {
        console.error("Card retrieval error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to retrieve the card at this time.",
        });
    }
}
async function updateCardStatusController(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: "UNAUTHENTICATED",
            message: "Authentication is required.",
        });
        return;
    }
    const rawId = req.params.id;
    const cardId = Array.isArray(rawId)
        ? rawId[0]
        : rawId;
    if (!cardId) {
        res.status(400).json({
            error: "INVALID_CARD",
            message: "Card ID is required.",
        });
        return;
    }
    const validation = card_schemas_js_1.updateCardStatusSchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json({
            error: "VALIDATION_ERROR",
            message: "Invalid card status.",
            details: validation.error.flatten(),
        });
        return;
    }
    try {
        const card = await (0, card_service_js_1.updateCardStatus)(req.user.id, cardId, validation.data.status);
        res.status(200).json({
            message: "Card status updated successfully.",
            card,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                error: "CARD_STATUS_UPDATE_FAILED",
                message: error.message,
            });
            return;
        }
        console.error("Card status update error:", error);
        res.status(500).json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Unable to update card status at this time.",
        });
    }
}
//# sourceMappingURL=card.controller.js.map