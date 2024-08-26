import { Router } from "express"
import validateRequest from "../../middleware/vaildRequest";
import { createSwitchValidationSchema } from "./switch.validation";
import { SwitchControllers } from "./switch.controller";

const route = Router();

route.post(
    '/create-switch',
    validateRequest(createSwitchValidationSchema),
    SwitchControllers.createSwitch,
)

export const SwitchRoutes = route;
