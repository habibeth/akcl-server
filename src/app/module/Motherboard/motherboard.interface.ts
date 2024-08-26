import { Model, Types } from "mongoose";


export type TMotherboard = {
    assetId: string;
    pcComponents: Types.ObjectId;
    brand: string;
    model: string;
    price: string;
    purchaseDate: Date;
    vendor: string;
    descriptions?: string;
    insertedBy: string;
    isDeleted: boolean
};

export interface MotherboardModel extends Model<TMotherboard> {
    isPcComponentsExists(id: string): Promise<TMotherboard | null>;

}