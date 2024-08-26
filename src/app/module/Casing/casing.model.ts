import { model, Schema } from "mongoose";
import { CasingModel, TCasing } from "./casing.interface";


const casingSchema = new Schema<TCasing, CasingModel>(
    {
        assetId: { type: String, required: true },
        pcComponents: { type: Schema.Types.ObjectId, ref: "Casing", required: true },
        brand: { type: String },
        model: { type: String },
        price: { type: String, required: true },
        purchaseDate: { type: Date, required: true },
        vendor: { type: String, required: true },
        descriptions: { type: String },
        insertedBy: { type: String, required: true },
        isDeleted: { type: Boolean, default: false, required: true },
    },
    {
        timestamps: true
    },
)


casingSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});


export const Casing = model<TCasing, CasingModel>('Casing', casingSchema);