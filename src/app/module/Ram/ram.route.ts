import { Router } from "express"
import validateRequest from "../../middleware/vaildRequest";
import { createRamValidationSchema } from "./ram.validation";
import { RamControllers } from "./ram.controller";

const route = Router();

route.post(
    '/create-ram',
    validateRequest(createRamValidationSchema),
    RamControllers.createRam,
)

export const RamRoutes = route;
