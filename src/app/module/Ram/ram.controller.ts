import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { RamServices } from "./ram.service";



const createRam = catchAsync(async (req, res) => {
    const { ram: payload } = req.body
    const result = await RamServices.createRamIntoDB(payload);

    sendResponse(res, {
        message: "Ram Data is Created Successfully!",
        data: result
    })
})

export const RamControllers = {
    createRam
}