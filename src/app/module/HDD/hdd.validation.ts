import { z } from "zod";


export const createHDDValidationSchema = z.object({
    body: z.object({
        hdd: z.object({
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


export const HDDValidation = {
    createHDDValidationSchema
}