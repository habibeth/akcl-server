import { Model, Types } from "mongoose";


export type TSwitch = {
    assetId: string;
    brand: string;
    model: string;
    port: string;
    type: 'unmanaged' | 'managed' | 'PoE' | 'PoE Managed';
    price: string;
    purchaseDate: Date;
    vendor: string;
    descriptions?: string;
    insertedBy: string;
    isDeleted: boolean
};

export interface SwitchModel extends Model<TSwitch> {
    isPcComponentsExists(id: string): Promise<TSwitch | null>;
}