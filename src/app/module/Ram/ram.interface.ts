import { Model, Types } from "mongoose";


export type TRam = {
    assetId: string;
    pcComponents: Types.ObjectId;
    brand: string;
    capacity: string;
    frequency: string;
    price: string;
    purchaseDate: Date;
    vendor: string;
    descriptions?: string;
    insertedBy: string;
    isDeleted: boolean
};

export interface RamModel extends Model<TRam> {
    isPcComponentsExists(id: string): Promise<TRam | null>;
}