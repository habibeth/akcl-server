import { z } from "zod";


export const createSwitchValidationSchema = z.object({
    body: z.object({
        switch: z.object({
            brand: z.string(),
            model: z.string(),
            port: z.string(),
            type: z.string(),
            price: z.string(),
            purchaseDate: z.string(),
            vendor: z.string(),
            descriptions: z.string().optional(),
            insertedBy: z.string(),
            isDeleted: z.boolean(),
        }),
    }),
});


export const SwitchValidation = {
    createSwitchValidationSchema
}