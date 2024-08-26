import { PcComponents } from "./pcComponents.model";

const findLastMotherboardId = async () => {
    const lastMotherboard = await PcComponents.findOne({
        assetType: 'motherboard'
    }, {
        assetId: 1,
        _id: 0,
    }).sort({
        createdAt: -1
    }).lean()

    return lastMotherboard?.assetId ? lastMotherboard?.assetId : undefined;
}

export const generateMotherboardId = async () => {
    let currentId = (0).toString();
    const lastMotherboardId = await findLastMotherboardId();

    if (lastMotherboardId) {
        currentId = lastMotherboardId.substring(8);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(5, '0');

    incrementId = `AKCL-MB-${incrementId}`;

    return incrementId;
};

const findLastRamId = async () => {
    const lastRam = await PcComponents.findOne({
        assetType: 'ram'
    }, {
        assetId: 1,
        _id: 0,
    }).sort({
        createdAt: -1
    }).lean()

    return lastRam?.assetId ? lastRam?.assetId : undefined;
}

export const generateRamId = async () => {
    let currentId = (0).toString();
    const lastRamId = await findLastRamId();

    if (lastRamId) {
        currentId = lastRamId.substring(9);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(5, '0');

    incrementId = `AKCL-RAM-${incrementId}`;

    return incrementId;
};


const findLastSSDId = async () => {
    const lastSSD = await PcComponents.findOne({
        assetType: 'ssd'
    }, {
        assetId: 1,
        _id: 0,
    }).sort({
        createdAt: -1
    }).lean()

    return lastSSD?.assetId ? lastSSD?.assetId : undefined;
}

export const generateSSDId = async () => {
    let currentId = (0).toString();
    const lastSSDId = await findLastSSDId();

    if (lastSSDId) {
        currentId = lastSSDId.substring(9);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(5, '0');

    incrementId = `AKCL-SSD-${incrementId}`;

    return incrementId;
};


const findLastHDDId = async () => {
    const lastHDD = await PcComponents.findOne({
        assetType: 'hdd'
    }, {
        assetId: 1,
        _id: 0,
    }).sort({
        createdAt: -1
    }).lean()

    return lastHDD?.assetId ? lastHDD?.assetId : undefined;
}

export const generateHDDId = async () => {
    let currentId = (0).toString();
    const lastHDDId = await findLastHDDId();

    if (lastHDDId) {
        currentId = lastHDDId.substring(9);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(5, '0');

    incrementId = `AKCL-HDD-${incrementId}`;

    return incrementId;
};


const findLastProcessorId = async () => {
    const lastProcessor = await PcComponents.findOne({
        assetType: 'processor'
    }, {
        assetId: 1,
        _id: 0,
    }).sort({
        createdAt: -1
    }).lean()

    return lastProcessor?.assetId ? lastProcessor?.assetId : undefined;
}

export const generateProcessorId = async () => {
    let currentId = (0).toString();
    const lastProcessorId = await findLastProcessorId();

    if (lastProcessorId) {
        currentId = lastProcessorId.substring(9);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(5, '0');

    incrementId = `AKCL-PCR-${incrementId}`;

    return incrementId;
};


const findLastCasingId = async () => {
    const lastCasingId = await PcComponents.findOne({
        assetType: 'casing'
    }, {
        assetId: 1,
        _id: 0,
    }).sort({
        createdAt: -1
    }).lean()

    return lastCasingId?.assetId ? lastCasingId?.assetId : undefined;
}

export const generateCasingId = async () => {
    let currentId = (0).toString();
    const lastCasingId = await findLastCasingId();

    if (lastCasingId) {
        currentId = lastCasingId.substring(12);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(5, '0');

    incrementId = `AKCL-CASING-${incrementId}`;

    return incrementId;
};


