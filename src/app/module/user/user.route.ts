import { Router } from "express";
import validateRequest from "../../middleware/vaildRequest";
import { createAdminValidationSchema } from "../Admin/admin.validation";
import { UserControllers } from "./user.controller";
import { createModifierValidationSchema } from "../Modifier/modifier.validation";
import { createViewerValidationSchema } from "../Viewer/viewer.validation";

const router = Router();

router.post(
    '/create-admin',
    validateRequest(createAdminValidationSchema),
    UserControllers.createAdmin,
);

router.post(
    '/create-modifier',
    validateRequest(createModifierValidationSchema),
    UserControllers.createModifier,
);

router.post(
    '/create-viewer',
    validateRequest(createViewerValidationSchema),
    UserControllers.createViewer,
);


export const userRoutes = router