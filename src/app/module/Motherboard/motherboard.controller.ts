import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MotherboardServices } from "./motherboard.service";



const createMotherboard = catchAsync(async (req, res) => {
    const { motherboard: payload } = req.body
    const result = await MotherboardServices.createMotherboardIntoDB(payload);

    sendResponse(res, {
        message: "Motherboard Data is Created Successfully!",
        data: result
    })
})

export const MotherboardControllers = {
    createMotherboard
}