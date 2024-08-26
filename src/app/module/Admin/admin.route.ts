import { Router } from "express";
import validateRequest from "../../middleware/vaildRequest";
import { createAdminValidationSchema } from "./admin.validation";
import { AdminControllers } from "./admin.controller";


const route = Router();

route.post(
    '/create-admin',
    // validateRequest(createAdminValidationSchema),
    AdminControllers.createAdmin,
)

export const AdminRoutes = route