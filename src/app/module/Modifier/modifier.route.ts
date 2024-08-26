import { Router } from "express";
import validateRequest from "../../middleware/vaildRequest";
import { createModifierValidationSchema } from "./modifier.validation";
import { ModifierControllers } from "./modifier.controller";


const route = Router();

route.post(
    '/create-modifier',
    validateRequest(createModifierValidationSchema),
    ModifierControllers.createModifier,
)

export const ModifierRoutes = route