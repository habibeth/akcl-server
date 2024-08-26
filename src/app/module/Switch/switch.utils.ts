import { Switch } from "./switch.model";


const findLastSwitchId = async () => {
    const lastSwitch = await Switch.findOne({},
        {
            assetId: 1,
            _id: 0,
        }).sort({
            createdAt: -1
        }).lean()

    return lastSwitch?.assetId ? lastSwitch?.assetId : undefined;
}

export const generateSwitchId = async () => {
    let currentId = (0).toString();
    const lastSwitchId = await findLastSwitchId();

    if (lastSwitchId) {
        currentId = lastSwitchId.substring(9);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(5, '0');

    incrementId = `AKCL-SW-${incrementId}`;

    return incrementId;
};