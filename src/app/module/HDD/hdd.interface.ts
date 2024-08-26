import { Model, Types } from "mongoose";


export type THDD = {
    assetId: string;
    pcComponents: Types.ObjectId;
    brand: string;
    capacity: string;
    price: string;
    purchaseDate: Date;
    vendor: string;
    descriptions?: string;
    insertedBy: string;
    isDeleted: boolean
};

export interface HDDModel extends Model<THDD> {
    isPcComponentsExists(id: string): Promise<THDD | null>;
}