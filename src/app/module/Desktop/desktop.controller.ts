import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { DesktopServices } from "./desktop.service";



const createDesktop = catchAsync(async (req, res) => {
    const { desktop: payload } = req.body;

    const result = await DesktopServices.createDesktopIntoDB(
        payload,
    );

    sendResponse(res, {
        message: 'Desktop is created successfully!',
        data: result,
    });
});

export const DesktopControllers = {
    createDesktop
}