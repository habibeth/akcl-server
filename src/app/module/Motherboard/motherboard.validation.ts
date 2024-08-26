import { z } from "zod";


export const createMotherboardValidationSchema = z.object({
    body: z.object({
        motherboard: z.object({
            assetId: z.string(),
            pcComponents: z.string(),  // assuming ObjectId as a string
            brand: z.string(),
            model: z.string(),
            price: z.string(),
            purchaseDate: z.string(),
            vendor: z.string(),
            descriptions: z.string().optional(),
            insertedBy: z.string(),
            isDeleted: z.boolean(),
        }),
    }),
});


export const MotherboardValidation = {
    createMotherboardValidationSchema
}