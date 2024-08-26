import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ModifierServices } from "./modifier.service";

const createModifier = catchAsync(async (req, res) => {
    const { modifier: payload } = req.body
    const result = await ModifierServices.createModifierIntoDB(payload);

    sendResponse(res, {
        message: "Modifier is Created Successfully!",
        data: result
    })
})

export const ModifierControllers = {
    createModifier
}