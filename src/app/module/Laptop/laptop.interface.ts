import { Model, Types } from "mongoose";


export type TLaptop = {
    assetId: string;
    brand: string;
    model: string;
    processor: string;
    ram: string;
    storageCapacity: string;
    displaySize: string;
    warranty: string;
    serialNo: string;
    price: string;
    purchaseDate: Date;
    vendor: string;
    descriptions?: string;
    insertedBy: string;
    isDeleted: boolean
};

export interface LaptopModel extends Model<TLaptop> {
    isPcComponentsExists(id: string): Promise<TLaptop | null>;
}