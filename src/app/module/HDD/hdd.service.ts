import { THDD } from "./hdd.interface";
import { HDD } from "./hdd.model";





const createHDDIntoDB = async (payload: THDD) => {
    const result = await HDD.create(payload);
    return result;
}

export const HDDServices = {
    createHDDIntoDB
}