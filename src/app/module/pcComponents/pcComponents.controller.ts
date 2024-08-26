import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { PcComponentServices } from "./pcComponents.service";


const createMotherboard = catchAsync(async (req, res) => {
    const { motherboard: payload } = req.body;

    const result = await PcComponentServices.createMotherboardIntoDB(
        payload,
    );

    sendResponse(res, {
        message: 'Motherboard Component is created successfully!',
        data: result,
    });
});

const createRam = catchAsync(async (req, res) => {
    const { ram: payload } = req.body;

    const result = await PcComponentServices.createRamIntoDB(
        payload,
    );

    sendResponse(res, {
        message: 'Ram Component is created successfully!',
        data: result,
    });
});

const createSSD = catchAsync(async (req, res) => {
    const { ssd: payload } = req.body;

    const result = await PcComponentServices.createSSDIntoDB(
        payload,
    );

    sendResponse(res, {
        message: 'SSD Component is created successfully!',
        data: result,
    });
});

const createHDD = catchAsync(async (req, res) => {
    const { hdd: payload } = req.body;

    const result = await PcComponentServices.createHDDIntoDB(
        payload,
    );

    sendResponse(res, {
        message: 'HDD Component is created successfully!',
        data: result,
    });
});


const createProcessor = catchAsync(async (req, res) => {
    const { processor: payload } = req.body;

    const result = await PcComponentServices.createProcessorIntoDB(
        payload,
    );

    sendResponse(res, {
        message: 'Processor Component is created successfully!',
        data: result,
    });
});


const createCasing = catchAsync(async (req, res) => {
    const { casing: payload } = req.body;

    const result = await PcComponentServices.createCasingIntoDB(
        payload,
    );

    sendResponse(res, {
        message: 'Casing Component is created successfully!',
        data: result,
    });
});

export const PcComponentsControllers = {
    createMotherboard,
    createRam,
    createSSD,
    createHDD,
    createProcessor,
    createCasing
}