import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SwitchServices } from "./switch.service";




const createSwitch = catchAsync(async (req, res) => {
    const { switch: payload } = req.body
    const result = await SwitchServices.createSwitchIntoDB(payload);

    sendResponse(res, {
        message: "Switch Data is Created Successfully!",
        data: result
    })
})

export const SwitchControllers = {
    createSwitch
}