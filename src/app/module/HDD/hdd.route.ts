import { Router } from "express"
import validateRequest from "../../middleware/vaildRequest";
import { createHDDValidationSchema } from "./hdd.validation";
import { HDDControllers } from "./hdd.controller";

const route = Router();

route.post(
    '/create-hdd',
    validateRequest(createHDDValidationSchema),
    HDDControllers.createHDD,
)

export const HDDRoutes = route;