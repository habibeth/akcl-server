import { TSwitch } from "./switch.interface";
import { Switch } from "./switch.model";
import { generateSwitchId } from "./switch.utils";





const createSwitchIntoDB = async (payload: TSwitch) => {
    const generatedId = await generateSwitchId();
    payload.assetId = generatedId
    const result = await Switch.create(payload);
    return result;
}

export const SwitchServices = {
    createSwitchIntoDB
}