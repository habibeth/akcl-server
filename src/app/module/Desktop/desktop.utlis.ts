import { Desktop } from "./desktop.model";

const findLastDesktopId = async () => {
    const lastDesktopId = await Desktop.findOne({
        assetType: 'desktop'
    }, {
        assetId: 1,
        _id: 0,
    }).sort({
        createdAt: -1
    }).lean()

    return lastDesktopId?.assetId ? lastDesktopId?.assetId : undefined;
}

export const generateDesktopId = async () => {
    let currentId = (0).toString();
    const lastDesktopId = await findLastDesktopId();

    if (lastDesktopId) {
        currentId = lastDesktopId.substring(9);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(5, '0');

    incrementId = `AKCL-DSK-${incrementId}`;

    return incrementId;
};