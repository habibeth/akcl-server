import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminServices } from "./admin.service";

const createAdmin = catchAsync(async (req, res) => {
    const { admin: payload } = req.body
    const result = await AdminServices.createAdminIntoDB(payload);

    sendResponse(res, {
        message: "Admin is Created Successfully!",
        data: result
    })
})

export const AdminControllers = {
    createAdmin
}