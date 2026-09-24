"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSupportMessageSchema = exports.supportTicketListSchema = exports.createSupportTicketSchema = void 0;
const zod_1 = require("zod");
exports.createSupportTicketSchema = zod_1.z.object({
    subject: zod_1.z
        .string()
        .trim()
        .min(1, "Subject is required.")
        .max(200, "Subject must be 200 characters or fewer."),
    category: zod_1.z
        .string()
        .trim()
        .min(1, "Category is required.")
        .max(100, "Category must be 100 characters or fewer."),
    priority: zod_1.z
        .enum([
        "LOW",
        "MEDIUM",
        "HIGH",
        "URGENT",
    ])
        .default("MEDIUM"),
    message: zod_1.z
        .string()
        .trim()
        .min(1, "Message is required.")
        .max(5000, "Message must be 5000 characters or fewer."),
});
exports.supportTicketListSchema = zod_1.z.object({
    page: zod_1.z.coerce
        .number()
        .int()
        .min(1)
        .default(1),
    limit: zod_1.z.coerce
        .number()
        .int()
        .min(1)
        .max(100)
        .default(20),
});
exports.addSupportMessageSchema = zod_1.z.object({
    message: zod_1.z
        .string()
        .trim()
        .min(1, "Message is required.")
        .max(5000, "Message must be 5000 characters or fewer."),
});
//# sourceMappingURL=support.schemas.js.map