import mongoose from "mongoose";
import { TMotherboard } from "../Motherboard/motherboard.interface";
import { TPcComponents } from "./pcComponents.interface";
import { PcComponents } from "./pcComponents.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { Motherboard } from "../Motherboard/motherboard.model";
import { generateCasingId, generateHDDId, generateMotherboardId, generateProcessorId, generateRamId, generateSSDId } from "./pcComponents.utils";
import { TRam } from "../Ram/ram.interface";
import { RAM } from "../Ram/ram.model";
import { TSSD } from "../SSD/ssd.interface";
import { SSD } from "../SSD/ssd.model";
import { THDD } from "../HDD/hdd.interface";
import { TProcessor } from "../Processor/processor.interface";
import { Processor } from "../Processor/processor.model";
import { Casing } from "../Casing/casing.model";



const createMotherboardIntoDB = async (
    payload: TMotherboard,
) => {
    // create a pc component object
    const pcComponentsData: Partial<TPcComponents> = {};

    //set asset type
    pcComponentsData.assetType = 'motherboard';


    // set pc component field
    pcComponentsData.brand = payload.brand;
    pcComponentsData.vendor = payload.vendor;



    const session = await mongoose.startSession();

    try {
        session.startTransaction();
        pcComponentsData.assetId = await generateMotherboardId();

        // pcComponentsData.id = await generateStudentId(admissionSemester);

        // create a pc components (transaction-1)
        const newComponent = await PcComponents.create([pcComponentsData], { session }); // array

        //create a Components
        if (!newComponent.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create PC Components');
        }
        //  _id as pcComponents
        payload.assetId = newComponent[0].assetId;
        payload.pcComponents = newComponent[0]._id; //reference _id

        // create a motherboard (transaction-2)
        const newMotherboard = await Motherboard.create([payload], { session });

        if (!newMotherboard.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Motherboard');
        }

        await session.commitTransaction();
        await session.endSession();

        return newMotherboard;
    } catch (err: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(err);
    }
};


const createRamIntoDB = async (
    payload: TRam,
) => {
    // create a pc component object
    const pcComponentsData: Partial<TPcComponents> = {};

    //set asset type
    pcComponentsData.assetType = 'ram';


    // set pc component field
    pcComponentsData.brand = payload.brand;
    pcComponentsData.vendor = payload.vendor;



    const session = await mongoose.startSession();

    try {
        session.startTransaction();
        pcComponentsData.assetId = await generateRamId();

        // pcComponentsData.id = await generateStudentId(admissionSemester);

        // create a pc components (transaction-1)
        const newComponent = await PcComponents.create([pcComponentsData], { session }); // array

        //create a Components
        if (!newComponent.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create PC Components');
        }
        //  _id as pcComponents
        payload.assetId = newComponent[0].assetId;
        payload.pcComponents = newComponent[0]._id; //reference _id

        // create a motherboard (transaction-2)
        const newRam = await RAM.create([payload], { session });

        if (!newRam.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Motherboard');
        }

        await session.commitTransaction();
        await session.endSession();

        return newRam;
    } catch (err: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(err);
    }
};


const createSSDIntoDB = async (
    payload: TSSD,
) => {
    // create a pc component object
    const pcComponentsData: Partial<TPcComponents> = {};

    //set asset type
    pcComponentsData.assetType = 'ssd';


    // set pc component field
    pcComponentsData.brand = payload.brand;
    pcComponentsData.vendor = payload.vendor;



    const session = await mongoose.startSession();

    try {
        session.startTransaction();
        pcComponentsData.assetId = await generateSSDId();

        // pcComponentsData.id = await generateStudentId(admissionSemester);

        // create a pc components (transaction-1)
        const newComponent = await PcComponents.create([pcComponentsData], { session }); // array

        //create a Components
        if (!newComponent.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create PC Components');
        }
        //  _id as pcComponents
        payload.assetId = newComponent[0].assetId;
        payload.pcComponents = newComponent[0]._id; //reference _id

        // create a motherboard (transaction-2)
        const newSSD = await SSD.create([payload], { session });

        if (!newSSD.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Motherboard');
        }

        await session.commitTransaction();
        await session.endSession();

        return newSSD;
    } catch (err: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(err);
    }
};

const createHDDIntoDB = async (
    payload: THDD,
) => {
    // create a pc component object
    const pcComponentsData: Partial<TPcComponents> = {};

    //set asset type
    pcComponentsData.assetType = 'hdd';


    // set pc component field
    pcComponentsData.brand = payload.brand;
    pcComponentsData.vendor = payload.vendor;



    const session = await mongoose.startSession();

    try {
        session.startTransaction();
        pcComponentsData.assetId = await generateHDDId();

        // pcComponentsData.id = await generateStudentId(admissionSemester);

        // create a pc components (transaction-1)
        const newComponent = await PcComponents.create([pcComponentsData], { session }); // array

        //create a Components
        if (!newComponent.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create PC Components');
        }
        //  _id as pcComponents
        payload.assetId = newComponent[0].assetId;
        payload.pcComponents = newComponent[0]._id; //reference _id

        // create a hdd (transaction-2)
        const newHDD = await SSD.create([payload], { session });

        if (!newHDD.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Motherboard');
        }

        await session.commitTransaction();
        await session.endSession();

        return newHDD;
    } catch (err: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(err);
    }
};

const createProcessorIntoDB = async (
    payload: TProcessor,
) => {
    // create a pc component object
    const pcComponentsData: Partial<TPcComponents> = {};

    //set asset type
    pcComponentsData.assetType = 'processor';


    // set pc component field
    pcComponentsData.brand = payload.brand;
    pcComponentsData.vendor = payload.vendor;



    const session = await mongoose.startSession();

    try {
        session.startTransaction();
        pcComponentsData.assetId = await generateProcessorId();

        // pcComponentsData.id = await generateStudentId(admissionSemester);

        // create a pc components (transaction-1)
        const newComponent = await PcComponents.create([pcComponentsData], { session }); // array

        //create a Components
        if (!newComponent.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create PC Components');
        }
        //  _id as pcComponents
        payload.assetId = newComponent[0].assetId;
        payload.pcComponents = newComponent[0]._id; //reference _id

        // create a hdd (transaction-2)
        const newProcessor = await Processor.create([payload], { session });

        if (!newProcessor.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Motherboard');
        }

        await session.commitTransaction();
        await session.endSession();

        return newProcessor;
    } catch (err: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(err);
    }
};

const createCasingIntoDB = async (
    payload: TProcessor,
) => {
    // create a pc component object
    const pcComponentsData: Partial<TPcComponents> = {};

    //set asset type
    pcComponentsData.assetType = 'casing';


    // set pc component field
    pcComponentsData.brand = payload.brand;
    pcComponentsData.vendor = payload.vendor;



    const session = await mongoose.startSession();

    try {
        session.startTransaction();
        pcComponentsData.assetId = await generateCasingId();

        // pcComponentsData.id = await generateStudentId(admissionSemester);

        // create a pc components (transaction-1)
        const newComponent = await PcComponents.create([pcComponentsData], { session }); // array

        //create a Components
        if (!newComponent.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create PC Components');
        }
        //  _id as pcComponents
        payload.assetId = newComponent[0].assetId;
        payload.pcComponents = newComponent[0]._id; //reference _id

        // create a hdd (transaction-2)
        const newProcessor = await Casing.create([payload], { session });

        if (!newProcessor.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Motherboard');
        }

        await session.commitTransaction();
        await session.endSession();

        return newProcessor;
    } catch (err: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(err);
    }
};


export const PcComponentServices = {
    createMotherboardIntoDB,
    createRamIntoDB,
    createSSDIntoDB,
    createHDDIntoDB,
    createProcessorIntoDB,
    createCasingIntoDB
}