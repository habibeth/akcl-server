import { model, Schema } from "mongoose";
import { PcComponentsModel, TPcComponents } from "./pcComponents.interface";
import { pcComponentsAssetType, pcComponentsStatus } from "./pcComponents.constant";

const pcComponentsSchema = new Schema<TPcComponents, PcComponentsModel>(
    {
        assetId: {
            type: String,
            required: true,
            unique: true,
        },
        brand: {
            type: String,
            required: true,
        },
        vendor: {
            type: String,
        },
        assetType: {
            type: String,
            enum: pcComponentsAssetType
        },
        status: {
            type: String,
            enum: pcComponentsStatus,
            default: 'idle',
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);





pcComponentsSchema.statics.isUserExistsByCustomId = async function (assetId: string) {
    return await PcComponents.findOne({ assetId });
};


export const PcComponents = model<TPcComponents, PcComponentsModel>('PcComponent', pcComponentsSchema);