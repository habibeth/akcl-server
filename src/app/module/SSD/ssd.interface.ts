import { Model, Types } from "mongoose";


export type TSSD = {
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

export interface SSDModel extends Model<TSSD> {
    isPcComponentsExists(id: string): Promise<TSSD | null>;
}