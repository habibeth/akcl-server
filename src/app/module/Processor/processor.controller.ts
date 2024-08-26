import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProcessorServices } from "./processor.service";

const createProcessor = catchAsync(async (req, res) => {
    const { processor: payload } = req.body
    const result = await ProcessorServices.createProcessorIntoDB(payload);

    sendResponse(res, {
        message: "Processor Data is Created Successfully!",
        data: result
    })
})

export const ProcessorControllers = {
    createProcessor
}