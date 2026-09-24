"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationListSchema = void 0;
const zod_1 = require("zod");
exports.notificationListSchema = zod_1.z.object({
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
    unreadOnly: zod_1.z
        .enum(["true", "false"])
        .optional()
        .transform((value) => value === "true"),
});
//# sourceMappingURL=notification.schemas.js.map