import { TDesktop } from "./desktop.interface";
import { Desktop } from "./desktop.model";
import { generateDesktopId } from "./desktop.utlis";


const createDesktopIntoDB = async (payload: TDesktop) => {
    const generatedId = await generateDesktopId()
    payload.assetId = generatedId
    payload.assetType = 'desktop'
    const result = await Desktop.create(payload);
    return result;
}

export const DesktopServices = {
    createDesktopIntoDB
}