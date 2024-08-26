import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { PrinterServices } from "./printer.service";




const createPrinter = catchAsync(async (req, res) => {
    const { printer: payload } = req.body
    const result = await PrinterServices.createPrinterIntoDB(payload);

    sendResponse(res, {
        message: "Printer Data is Created Successfully!",
        data: result
    })
})

export const PrinterControllers = {
    createPrinter
}