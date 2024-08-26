import { z } from "zod";
import { pcComponentsStatus } from "./pcComponents.constant";

const createPcComponentsValidationSchema = z.object({
    body: z.object({
        motherboard: z.object({
            brand: z.string(),
            vendor: z.string(),
            assetType: z.string().optional(),
            status: z.enum([...pcComponentsStatus] as [string, ...string[]]).optional(),
            isDeleted: z.boolean(),
        })
    })
});


export const PcComponentsValidation = {
    createPcComponentsValidationSchema
}