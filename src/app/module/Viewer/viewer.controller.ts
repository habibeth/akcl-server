import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ViewerServices } from "./viewer.service";

const createViewer = catchAsync(async (req, res) => {
    const { viewer: payload } = req.body
    const result = await ViewerServices.createViewerIntoDB(payload);

    sendResponse(res, {
        message: "Viewer is Created Successfully!",
        data: result
    })
})

export const ViewerControllers = {
    createViewer
}