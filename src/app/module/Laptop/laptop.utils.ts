import { Laptop } from "./laptop.model";



const findLastLaptopId = async () => {
    const lastLaptop = await Laptop.findOne({},
        {
            assetId: 1,
            _id: 0,
        }).sort({
            createdAt: -1
        }).lean()

    return lastLaptop?.assetId ? lastLaptop?.assetId : undefined;
}

export const generateLaptopId = async () => {
    let currentId = (0).toString();
    const lastLaptopId = await findLastLaptopId();

    if (lastLaptopId) {
        currentId = lastLaptopId.substring(9);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(5, '0');

    incrementId = `AKCL-LPT-${incrementId}`;

    return incrementId;
};