import { Router } from "express"
import validateRequest from "../../middleware/vaildRequest";
import { createPrinterValidationSchema } from "./printer.validation";
import { PrinterControllers } from "./printer.controller";

const route = Router();

route.post(
    '/create-printer',
    validateRequest(createPrinterValidationSchema),
    PrinterControllers.createPrinter,
)

export const PrinterRoutes = route;
