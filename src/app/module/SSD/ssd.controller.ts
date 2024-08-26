import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SSDServices } from "./ssd.service";



const createSSD = catchAsync(async (req, res) => {
    const { ssd: payload } = req.body
    const result = await SSDServices.createSSDIntoDB(payload);

    sendResponse(res, {
        message: "SSD Data is Created Successfully!",
        data: result
    })
})

export const SSDControllers = {
    createSSD
}