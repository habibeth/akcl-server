import { Router } from "express";
import validateRequest from "../../middleware/vaildRequest";
import { createProcessorValidationSchema } from "./processor.validation";
import { ProcessorControllers } from "./processor.controller";



const route = Router();

route.post(
    '/create-processor',
    validateRequest(createProcessorValidationSchema),
    ProcessorControllers.createProcessor
)

export const ProcessorRoutes = route