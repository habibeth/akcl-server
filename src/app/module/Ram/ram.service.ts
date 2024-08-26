import { TRam } from "./ram.interface";
import { RAM } from "./ram.model";



const createRamIntoDB = async (payload: TRam) => {
    const result = await RAM.create(payload);
    return result;
}

export const RamServices = {
    createRamIntoDB
}