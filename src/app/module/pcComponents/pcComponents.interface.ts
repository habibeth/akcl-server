import { Model } from "mongoose";


export interface TPcComponents {
    assetId: string;
    brand: string;
    vendor: string;
    assetType: 'motherboard' | 'ram' | 'ssd' | 'hdd' | 'processor' | 'casing';
    status: 'idle' | 'in-use' | 'damage';
    isDeleted: boolean;
}



export interface PcComponentsModel extends Model<TPcComponents> {
    isPcComponentsExistsByCustomId(assetId: string): Promise<TPcComponents>;
}