"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserStatusSchema = exports.adminUserListSchema = void 0;
const zod_1 = require("zod");
exports.adminUserListSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().min(1).default(1),
    limit: zod_1.z.coerce.number().int().min(1).max(100).default(20),
    status: zod_1.z
        .enum([
        "ACTIVE",
        "SUSPENDED",
        "LOCKED",
        "CLOSED",
    ])
        .optional(),
});
exports.updateUserStatusSchema = zod_1.z.object({
    status: zod_1.z.enum([
        "ACTIVE",
        "SUSPENDED",
        "LOCKED",
        "CLOSED",
    ]),
});
//# sourceMappingURL=admin.schemas.js.map