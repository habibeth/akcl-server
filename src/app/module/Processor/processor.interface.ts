import { Model, Types } from "mongoose";


export type TProcessor = {
    assetId: string;
    pcComponents: Types.ObjectId;
    model: string;
    brand?: string;
    generation: string;
    price: string;
    purchaseDate: Date;
    vendor: string;
    descriptions?: string;
    insertedBy: string;
    isDeleted: boolean
};

export interface ProcessorModel extends Model<TProcessor> {
    isPcComponentsExists(id: string): Promise<TProcessor | null>;
}