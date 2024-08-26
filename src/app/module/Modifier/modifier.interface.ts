import { Model, Types } from "mongoose";
import { TBloodGroup, TGender, TUserName } from "../../interface/user";

export type TModifier = {
    id: string;
    user: Types.ObjectId;
    designation: string;
    name: TUserName;
    gender: TGender;
    dateOfBirth?: Date;
    email: string;
    password: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: TBloodGroup;
    presentAddress: string;
    permanentAddress: string;
    profileImg?: string;
    isDeleted: boolean;
};

export interface ModifierModel extends Model<TModifier> {
    isUserExists(id: string): Promise<TModifier | null>;
}