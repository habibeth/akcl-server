import { Model, Types } from "mongoose";


export type TPrinter = {
    assetId: string;
    brand: string;
    model: string;
    type: 'Laser' | 'Ink';
    price: string;
    purchaseDate: Date;
    vendor: string;
    descriptions?: string;
    insertedBy: string;
    isDeleted: boolean
};

export interface PrinterModel extends Model<TPrinter> {
    isPcComponentsExists(id: string): Promise<TPrinter | null>;
}