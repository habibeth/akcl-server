import { TPrinter } from "./printer.interface";
import { Printer } from "./printer.model";
import { generatePrinterId } from "./printer.utils";


const createPrinterIntoDB = async (payload: TPrinter) => {
    const generatedId = await generatePrinterId()
    payload.assetId = generatedId
    const result = await Printer.create(payload);
    return result;
}

export const PrinterServices = {
    createPrinterIntoDB
}