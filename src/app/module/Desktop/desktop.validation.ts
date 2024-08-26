import { z } from "zod";
import { rmgAndTextileDepartments, rmgAndTextileDesignations } from "./desktop.const";

export const createDesktopValidationSchema = z.object({
    body: z.object({
        desktop: z.object({
            userName: z.string().min(1, "User Name is required"),
            designation: z.enum(rmgAndTextileDesignations as [string, ...string[]]),
            department: z.enum(rmgAndTextileDepartments as [string, ...string[]]),
            brand: z.string().optional(),
            tagNo: z.string().optional(),
            serialNo: z.string().optional(),
            processor: z.string().optional(), // Assuming this is an ObjectId string
            ram: z.string().optional(),        // Assuming this is an ObjectId string
            ssd: z.string().optional(),        // Assuming this is an ObjectId string
            hdd: z.string().optional(),        // Assuming this is an ObjectId string
            motherboard: z.string().optional(), // Assuming this is an ObjectId string
            casing: z.string().optional(),     // Assuming this is an ObjectId string
            descriptions: z.string().optional(),
            insertedBy: z.string().min(1, "Inserted By is required"),
            isDeleted: z.boolean().default(false)
        })
    })
});

export const DesktopValidationSchema = {
    createDesktopValidationSchema
}
