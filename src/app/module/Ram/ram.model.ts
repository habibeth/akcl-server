import { model, Schema } from "mongoose";
import { RamModel, TRam } from "./ram.interface";


const ramSchema = new Schema<TRam, RamModel>(
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
        frequency: {
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


ramSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});


export const RAM = model<TRam, RamModel>('Ram', ramSchema);