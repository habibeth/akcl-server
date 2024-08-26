import { Router } from "express";
import validateRequest from "../../middleware/vaildRequest";
import { PcComponentsValidation } from "./pcComponents.validation";
import { PcComponentsControllers } from "./pcComponents.controller";
import { createRamValidationSchema } from "../Ram/ram.validation";
import { createSSDValidationSchema } from "../SSD/ssd.validation";
import { createHDDValidationSchema } from "../HDD/hdd.validation";
import { createProcessorValidationSchema } from "../Processor/processor.validation";
import { createCasingValidationSchema } from "../Casing/casing.validation";


const route = Router();

route.post(
    '/create-motherboard',
    validateRequest(PcComponentsValidation.createPcComponentsValidationSchema),
    PcComponentsControllers.createMotherboard,
)

route.post(
    '/create-ram',
    validateRequest(createRamValidationSchema),
    PcComponentsControllers.createRam,
)

route.post(
    '/create-ssd',
    validateRequest(createSSDValidationSchema),
    PcComponentsControllers.createSSD,
)

route.post(
    '/create-hdd',
    validateRequest(createHDDValidationSchema),
    PcComponentsControllers.createHDD,
)

route.post(
    '/create-processor',
    validateRequest(createProcessorValidationSchema),
    PcComponentsControllers.createProcessor,
)


route.post(
    '/create-casing',
    validateRequest(createCasingValidationSchema),
    PcComponentsControllers.createCasing,
)

export const PcComponentsRoutes = route;