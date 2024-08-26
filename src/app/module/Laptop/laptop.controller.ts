import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { LaptopServices } from "./laptop.service";




const createLaptop = catchAsync(async (req, res) => {
    const { laptop: payload } = req.body
    const result = await LaptopServices.createLaptopIntoDB(payload);

    sendResponse(res, {
        message: "Laptop is Inserted Successfully!",
        data: result
    })
})

export const LaptopControllers = {
    createLaptop
}