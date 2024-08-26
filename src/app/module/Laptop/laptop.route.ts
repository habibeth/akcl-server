import { Router } from "express"
import validateRequest from "../../middleware/vaildRequest";
import { createLaptopValidationSchema } from "./laptop.validation";
import { LaptopControllers } from "./laptop.controller";
const route = Router();

route.post(
    '/create-laptop',
    validateRequest(createLaptopValidationSchema),
    LaptopControllers.createLaptop
)

export const LaptopRoutes = route;
