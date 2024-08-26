import { Model, Types } from "mongoose";


export type TCasing = {
    assetId: string;
    pcComponents: Types.ObjectId;
    brand?: string;
    model?: string;
    price: string;
    purchaseDate: Date;
    vendor: string;
    descriptions?: string;
    insertedBy: string;
    isDeleted: boolean
};

export interface CasingModel extends Model<TCasing> {
    isPcComponentsExists(id: string): Promise<TCasing | null>;
}