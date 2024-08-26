import { model, Schema } from "mongoose";
import { ProcessorModel, TProcessor } from "./processor.interface";

const processorSchema = new Schema<TProcessor>(
    {
        assetId: { type: String, required: true },
        pcComponents: {
            type: Schema.Types.ObjectId,
            ref: 'PcComponents',
        },
        model: { type: String, required: true },
        brand: { type: String, required: true, default: 'INTEL' },
        generation: { type: String, required: true },
        price: { type: String, required: true },
        purchaseDate: { type: Date, required: true },
        vendor: { type: String, required: true },
        descriptions: { type: String },
        insertedBy: { type: String, required: true },
        isDeleted: { type: Boolean, default: false, required: true },
    }, {
    timestamps: true
}
);


processorSchema.statics.isPcComponentsExists = async function (id: string): Promise<TProcessor | null> {
    return this.findOne({ _id: id, isDeleted: false });
};


export const Processor = model<TProcessor, ProcessorModel>("Processor", processorSchema);