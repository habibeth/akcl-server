import { Model, Types } from "mongoose";
import { rmgAndTextileDepartments, rmgAndTextileDesignations } from "./desktop.const";


export type allDepartment = keyof typeof rmgAndTextileDepartments;

export type allDesignation = keyof typeof rmgAndTextileDesignations;

export type TDesktop = {
    assetId: string;
    assetType: string;
    userName: string;
    designation: allDesignation;
    department: allDepartment;
    brand?: string;
    tagNo?: string;
    serialNo?: string;
    processor?: Types.ObjectId;
    ram?: Types.ObjectId;
    ssd?: Types.ObjectId;
    hdd?: Types.ObjectId;
    motherboard?: Types.ObjectId;
    casing?: Types.ObjectId;
    descriptions?: string;
    insertedBy: string;
    isDeleted: boolean
};

export interface DesktopModel extends Model<TDesktop> {
    isPcComponentsExists(id: string): Promise<TDesktop | null>;
}