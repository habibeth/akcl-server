import { z } from "zod";


export const createPrinterValidationSchema = z.object({
    body: z.object({
        printer: z.object({
            brand: z.string(),
            model: z.string(),
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


export const PrinterValidation = {
    createPrinterValidationSchema
}