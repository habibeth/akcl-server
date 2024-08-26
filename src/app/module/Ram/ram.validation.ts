import { z } from "zod";


export const createRamValidationSchema = z.object({
    body: z.object({
        ram: z.object({
            brand: z.string(),
            capacity: z.string(),
            frequency: z.string(),
            price: z.string(),
            purchaseDate: z.string(),
            vendor: z.string(),
            descriptions: z.string().optional(),
            insertedBy: z.string(),
            isDeleted: z.boolean(),
        }),
    }),
});


export const RamValidation = {
    createRamValidationSchema
}