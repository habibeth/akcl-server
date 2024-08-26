import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminServices } from "../Admin/admin.service";
import { UserServices } from "./user.service";

const createAdmin = catchAsync(async (req, res) => {
    const { password, admin: payload } = req.body;

    const result = await UserServices.createAdminIntoDB(
        password,
        payload,
    );

    sendResponse(res, {
        message: 'Admin is created successfully!',
        data: result,
    });
});

const createModifier = catchAsync(async (req, res) => {
    const { password, modifier: payload } = req.body;

    const result = await UserServices.createModifierIntoDB(
        password,
        payload,
    );

    sendResponse(res, {
        message: 'Modifier is created successfully!',
        data: result,
    });
});

const createViewer = catchAsync(async (req, res) => {
    const { password, viewer: payload } = req.body;

    const result = await UserServices.createViewerIntoDB(
        password,
        payload,
    );

    sendResponse(res, {
        message: 'Viewer is created successfully!',
        data: result,
    });
});


export const UserControllers = {
    createAdmin,
    createModifier,
    createViewer
}