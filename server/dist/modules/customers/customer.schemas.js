"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerProfileSchema = void 0;
const zod_1 = require("zod");
const phoneSchema = zod_1.z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s().-]{7,20}$/, "Phone number format is invalid.");
exports.updateCustomerProfileSchema = zod_1.z
    .object({
    firstName: zod_1.z
        .string()
        .trim()
        .min(1, "First name cannot be empty.")
        .max(50, "First name must be between 2 and 50 characters."),
    lastName: zod_1.z
        .string()
        .trim()
        .min(1, "Last name cannot be empty.")
        .max(50, "Last name must be between 2 and 50 characters."),
    phone: zod_1.z.union([
        phoneSchema,
        zod_1.z.literal(""),
        zod_1.z.null(),
    ]),
})
    .partial()
    .strict();
//# sourceMappingURL=customer.schemas.js.map