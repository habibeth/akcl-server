import { TLaptop } from "./laptop.interface";
import { Laptop } from "./laptop.model";
import { generateLaptopId } from "./laptop.utils";



const createLaptopIntoDB = async (payload: TLaptop) => {
    const generatedId = await generateLaptopId()
    payload.assetId = generatedId
    const result = await Laptop.create(payload);
    return result;
}

export const LaptopServices = {
    createLaptopIntoDB
}