import { z } from "zod";

const phoneSchema = z
  .string()
  .trim()
  .regex(
    /^[+]?[0-9\s().-]{7,20}$/,
    "Phone number format is invalid.",
  );

export const updateCustomerProfileSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, "First name cannot be empty.")
      .max(
        50,
        "First name must be between 2 and 50 characters.",
      ),

    lastName: z
      .string()
      .trim()
      .min(1, "Last name cannot be empty.")
      .max(
        50,
        "Last name must be between 2 and 50 characters.",
      ),

    phone: z.union([
      phoneSchema,
      z.literal(""),
      z.null(),
    ]),
  })
  .partial()
  .strict();