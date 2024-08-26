import { TMotherboard } from "./motherboard.interface";
import { Motherboard } from "./motherboard.model";


const createMotherboardIntoDB = async (payload: TMotherboard) => {
    const result = await Motherboard.create(payload);
    return result;
}

export const MotherboardServices = {
    createMotherboardIntoDB
}