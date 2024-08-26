import { Printer } from "./printer.model";



const findLastPrinterId = async () => {
    const lastPrinter = await Printer.findOne({},
        {
            assetId: 1,
            _id: 0,
        }).sort({
            createdAt: -1
        }).lean()

    return lastPrinter?.assetId ? lastPrinter?.assetId : undefined;
}

export const generatePrinterId = async () => {
    let currentId = (0).toString();
    const lastPrinterId = await findLastPrinterId();

    if (lastPrinterId) {
        currentId = lastPrinterId.substring(9);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(5, '0');

    incrementId = `AKCL-PRT-${incrementId}`;

    return incrementId;
};