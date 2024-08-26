import { TSSD } from "./ssd.interface";
import { SSD } from "./ssd.model";




const createSSDIntoDB = async (payload: TSSD) => {
    const result = await SSD.create(payload);
    return result;
}

export const SSDServices = {
    createSSDIntoDB
}