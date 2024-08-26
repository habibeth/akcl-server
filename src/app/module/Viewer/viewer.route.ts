import { Router } from "express";
import validateRequest from "../../middleware/vaildRequest";
import { createViewerValidationSchema } from "./viewer.validation";
import { ViewerControllers } from "./viewer.controller";


const route = Router();

route.post(
    '/create-modifier',
    validateRequest(createViewerValidationSchema),
    ViewerControllers.createViewer,
)

export const ModifierRoutes = route