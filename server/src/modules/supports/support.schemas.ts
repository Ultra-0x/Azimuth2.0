import { z } from "zod";

export const createSupportTicketSchema =
  z.object({
    subject: z
      .string()
      .trim()
      .min(1, "Subject is required.")
      .max(
        200,
        "Subject must be 200 characters or fewer.",
      ),

    category: z
      .string()
      .trim()
      .min(1, "Category is required.")
      .max(
        100,
        "Category must be 100 characters or fewer.",
      ),

    priority: z
      .enum([
        "LOW",
        "MEDIUM",
        "HIGH",
        "URGENT",
      ])
      .default("MEDIUM"),

    message: z
      .string()
      .trim()
      .min(1, "Message is required.")
      .max(
        5000,
        "Message must be 5000 characters or fewer.",
      ),
  });

export const supportTicketListSchema =
  z.object({
    page: z.coerce
      .number()
      .int()
      .min(1)
      .default(1),

    limit: z.coerce
      .number()
      .int()
      .min(1)
      .max(100)
      .default(20),
  });

export const addSupportMessageSchema =
  z.object({
    message: z
      .string()
      .trim()
      .min(1, "Message is required.")
      .max(
        5000,
        "Message must be 5000 characters or fewer.",
      ),
  });
