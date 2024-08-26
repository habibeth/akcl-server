import { z } from "zod";


export const createCasingValidationSchema = z.object({
    body: z.object({
        casing: z.object({
            brand: z.string().optional(),
            model: z.string().optional(),
            price: z.string(),
            purchaseDate: z.string(),
            vendor: z.string(),
            descriptions: z.string().optional(),
            insertedBy: z.string(),
            isDeleted: z.boolean().default(false),
        }),
    }),
});


export const CasingValidation = {
    createCasingValidationSchema
}