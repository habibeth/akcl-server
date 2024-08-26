import { model, Schema } from "mongoose";
import { MotherboardModel, TMotherboard } from "./motherboard.interface";


const motherboardSchema = new Schema<TMotherboard, MotherboardModel>(
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
        model: {
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


motherboardSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

motherboardSchema.statics.isPcComponentsExists = async function (id: string) {
    const existingPcComponents = await Motherboard.findOne({ assetId: id });
    return existingPcComponents;
};

export const Motherboard = model<TMotherboard, MotherboardModel>('Motherboard', motherboardSchema);