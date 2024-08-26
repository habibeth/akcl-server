import { Schema, model, Types } from "mongoose";
import { DesktopModel, TDesktop } from "./desktop.interface";
import { rmgAndTextileDepartments, rmgAndTextileDesignations } from "./desktop.const";

const desktopSchema = new Schema<TDesktop, DesktopModel>(
    {
        assetId: {
            type: String,
            required: true
        },
        assetType: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            enum: rmgAndTextileDesignations,
            required: true
        },
        department: {
            type: String,
            enum: rmgAndTextileDepartments,
            required: true
        },
        brand: {
            type: String
        },
        tagNo: {
            type: String
        },
        serialNo: {
            type: String
        },
        processor: {
            type: Schema.Types.ObjectId,
            ref: "Processor"
        },
        ram: {
            type: Schema.Types.ObjectId,
            ref: "RAM"
        },
        ssd: {
            type: Schema.Types.ObjectId,
            ref: "SSD"
        },
        hdd: {
            type: Schema.Types.ObjectId,
            ref: "HDD"
        },
        motherboard: {
            type: Schema.Types.ObjectId,
            ref: "Motherboard"
        },
        casing: {
            type: Schema.Types.ObjectId,
            ref: "Casing"
        },
        descriptions: {
            type: String
        },
        insertedBy: {
            type: String,
            required: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
);

desktopSchema.statics.isPcComponentsExists = async function (id: string): Promise<TDesktop | null> {
    return this.findOne({ _id: id, isDeleted: false });
};

export const Desktop = model<TDesktop, DesktopModel>("Desktop", desktopSchema);

