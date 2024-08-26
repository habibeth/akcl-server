import { model, Schema } from "mongoose";
import { SSDModel, TSSD } from "./ssd.interface";


const SSDSchema = new Schema<TSSD, SSDModel>(
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


SSDSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});


export const SSD = model<TSSD, SSDModel>('SSD', SSDSchema);