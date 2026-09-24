"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCardStatusSchema = exports.createCardSchema = void 0;
const zod_1 = require("zod");
exports.createCardSchema = zod_1.z.object({
    accountId: zod_1.z
        .string()
        .trim()
        .min(1, "Account ID is required."),
    type: zod_1.z.enum(["VIRTUAL", "PHYSICAL"]),
});
exports.updateCardStatusSchema = zod_1.z.object({
    status: zod_1.z.enum([
        "ACTIVE",
        "FROZEN",
        "BLOCKED",
        "CANCELLED",
    ]),
});
//# sourceMappingURL=card.schemas.js.map