import { z } from "zod";


export const createSSDValidationSchema = z.object({
    body: z.object({
        ssd: z.object({
            brand: z.string(),
            capacity: z.string(),
            price: z.string(),
            purchaseDate: z.string(),
            vendor: z.string(),
            descriptions: z.string().optional(),
            insertedBy: z.string(),
            isDeleted: z.boolean(),
        }),
    }),
});


export const SSDValidation = {
    createSSDValidationSchema
}