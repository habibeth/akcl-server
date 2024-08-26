import { model, Schema } from "mongoose";
import { HDDModel, THDD } from "./hdd.interface";


const HDDSchema = new Schema<THDD, HDDModel>(
    {
        assetId: {
            type: String,
            unique: true
        },
        pcComponents: {
            type: Schema.Types.ObjectId,
            ref: 'PcComponents',
        },
        brand: {
            type: String,
        },
        capacity: {
            type: String,
        },
        price: {
            type: String,
        },
        purchaseDate: {
            type: Date,
        },
        vendor: {
            type: String,
        },
        descriptions: {
            type: String,
            default: ''
        },
        insertedBy: {
            type: String,
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    },
)


HDDSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});


export const HDD = model<THDD, HDDModel>('HDD', HDDSchema);