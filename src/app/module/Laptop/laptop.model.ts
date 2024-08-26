import { model, Schema } from "mongoose";
import { LaptopModel, TLaptop } from "./laptop.interface";


const laptopSchema = new Schema<TLaptop, LaptopModel>(
    {
        assetId: { type: String, required: true },
        brand: { type: String, required: true },
        model: { type: String, required: true },
        processor: { type: String, required: true },
        ram: { type: String, required: true },
        storageCapacity: { type: String, required: true },
        displaySize: { type: String, required: true },
        warranty: { type: String, required: true },
        serialNo: { type: String, required: true },
        price: { type: String, required: true },
        purchaseDate: { type: Date, required: true },
        vendor: { type: String, required: true },
        descriptions: { type: String },
        insertedBy: { type: String, required: true },
        isDeleted: { type: Boolean, required: true, default: false },
    },
    {
        timestamps: true
    },
);



laptopSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});


export const Laptop = model<TLaptop, LaptopModel>('Laptop', laptopSchema);