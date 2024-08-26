import { z } from "zod";


export const createLaptopValidationSchema = z.object({
    body: z.object({
        laptop: z.object({
            brand: z.string(),
            model: z.string(),
            processor: z.string(),
            ram: z.string(),
            storageCapacity: z.string(),
            displaySize: z.string(),
            warranty: z.string(),
            serialNo: z.string(),
            price: z.string(),
            purchaseDate: z.string(),
            vendor: z.string(),
            descriptions: z.string().optional(),
            insertedBy: z.string(),
            isDeleted: z.boolean(),
        }),
    }),
});


export const LaptopValidation = {
    createLaptopValidationSchema
}