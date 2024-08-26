import { Router } from "express"
import validateRequest from "../../middleware/vaildRequest";
import { createSSDValidationSchema } from "./ssd.validation";
import { SSDControllers } from "./ssd.controller";

const route = Router();

route.post(
    '/create-ssd',
    validateRequest(createSSDValidationSchema),
    SSDControllers.createSSD,
)

export const SSDRoutes = route;
