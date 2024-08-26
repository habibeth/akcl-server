import { Model, Types } from "mongoose";
import { TBloodGroup, TGender, TUserName } from "../../interface/user";


export type TViewer = {
    id: string;
    user: Types.ObjectId;
    designation: string;
    name: TUserName;
    gender: TGender;
    email: string;
    password: string;
    contactNo: string;
    emergencyContactNo?: string;
    bloodGroup?: TBloodGroup;
    presentAddress?: string;
    permanentAddress?: string;
    profileImg?: string;
    isDeleted: boolean;
};

export interface ViewerModel extends Model<TViewer> {
    isUserExists(id: string): Promise<TViewer | null>;

}