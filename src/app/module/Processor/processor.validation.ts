import { z } from "zod";

export const createProcessorValidationSchema = z.object({
    body: z.object({
        processor: z.object({
            model: z.string(),
            brand: z.string().optional(),
            generation: z.string(),
            price: z.string(),
            purchaseDate: z.string(),
            vendor: z.string(),
            descriptions: z.string().optional(),
            insertedBy: z.string(),
            isDeleted: z.boolean().default(false),
        })
    })
});


export const ProcessorSchemaValidation = {
    createProcessorValidationSchema
}