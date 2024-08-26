import { Router } from "express";
import validateRequest from "../../middleware/vaildRequest";
import { createDesktopValidationSchema } from "./desktop.validation";
import { DesktopControllers } from "./desktop.controller";


const route = Router();

route.post(
    '/create-desktop',
    validateRequest(createDesktopValidationSchema),
    DesktopControllers.createDesktop
)


export const DesktopRoutes = route