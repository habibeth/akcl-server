import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { HDDServices } from "./hdd.service";



const createHDD = catchAsync(async (req, res) => {
    const { hdd: payload } = req.body
    const result = await HDDServices.createHDDIntoDB(payload);

    sendResponse(res, {
        message: "HDD Data is Created Successfully!",
        data: result
    })
})

export const HDDControllers = {
    createHDD
}