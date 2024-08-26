import { Router } from "express"
import { MotherboardControllers } from "./motherboard.controller";
import validateRequest from "../../middleware/vaildRequest";
import { createMotherboardValidationSchema } from "./motherboard.validation";

const route = Router();

route.post(
    '/create-motherboard',
    validateRequest(createMotherboardValidationSchema),
    MotherboardControllers.createMotherboard,
)

export const MotherboardRoutes = route;
