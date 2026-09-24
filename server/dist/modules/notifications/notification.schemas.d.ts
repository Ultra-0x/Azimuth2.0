import { z } from "zod";
export declare const notificationListSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    unreadOnly: z.ZodPipe<z.ZodOptional<z.ZodEnum<{
        false: "false";
        true: "true";
    }>>, z.ZodTransform<boolean, "false" | "true" | undefined>>;
}, z.core.$strip>;
