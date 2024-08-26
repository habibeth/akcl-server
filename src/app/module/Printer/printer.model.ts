import { model, Schema } from "mongoose";
import { PrinterModel, TPrinter } from "./printer.interface";
import { printerType } from "./printer.constant";


const printerSchema = new Schema<TPrinter, PrinterModel>(
    {
        assetId: {
            type: String,
            unique: true
        },
        brand: {
            type: String,
        },
        model: {
            type: String,
        },
        type: {
            type: String,
            enum: printerType
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
        },
    },
    {
        timestamps: true
    },
)


printerSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});


export const Printer = model<TPrinter, PrinterModel>('Printer', printerSchema);