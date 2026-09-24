import { z } from "zod";
export declare const updateCustomerProfileSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>;
}, z.core.$strict>;
