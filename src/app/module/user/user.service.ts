import mongoose from "mongoose";
import config from "../../config";
import { TAdmin } from "../Admin/admin.interface";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Admin } from "../Admin/admin.model";
import { TModifier } from "../Modifier/modifier.interface";
import { Modifier } from "../Modifier/modifier.model";
import { Viewer } from "../Viewer/viewer.model";

const createAdminIntoDB = async (
    password: string,
    payload: TAdmin,
) => {
    // create a user object
    const userData: Partial<TUser> = {};

    //if password is not given , use default password
    userData.password = password || (config.default_password as string);

    //set admin role
    userData.role = 'admin';
    // set admin email
    userData.email = payload.email;
    userData.id = payload.id


    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        // create a user (transaction-1)
        const newUser = await User.create([userData], { session }); // array

        //create a Admin
        if (!newUser.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
        }
        //  _id as user
        payload.user = newUser[0]._id; //reference _id

        // create a Admin (transaction-2)
        const newAdmin = await Admin.create([payload], { session });

        if (!newAdmin.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Admin');
        }

        await session.commitTransaction();
        await session.endSession();

        return newAdmin;
    } catch (err: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(err);
    }
};


const createModifierIntoDB = async (
    password: string,
    payload: TModifier,
) => {
    // create a user object
    const userData: Partial<TUser> = {};

    //if password is not given , use default password
    userData.password = password || (config.default_password as string);

    //set modifier role
    userData.role = 'modifier';
    // set modifier email
    userData.email = payload.email;
    userData.id = payload.id


    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        // create a user (transaction-1)
        const newUser = await User.create([userData], { session }); // array

        //create a Modifier
        if (!newUser.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
        }
        // set id , _id as user
        payload.user = newUser[0]._id; //reference _id

        // create a modifier (transaction-2)
        const newModifier = await Modifier.create([payload], { session });

        if (!newModifier.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
        }

        await session.commitTransaction();
        await session.endSession();

        return newModifier;
    } catch (err: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(err);
    }
};


const createViewerIntoDB = async (
    password: string,
    payload: TModifier,
) => {
    // create a user object
    const userData: Partial<TUser> = {};

    //if password is not given , use default password
    userData.password = password || (config.default_password as string);

    //set Viewer role
    userData.role = 'viewer';
    // set Viewer email
    userData.email = payload.email;
    userData.id = payload.id


    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        // create a user (transaction-1)
        const newUser = await User.create([userData], { session }); // array

        //create a Viewer
        if (!newUser.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
        }
        // set id , _id as user
        payload.user = newUser[0]._id; //reference _id

        // create a Viewer (transaction-2)
        const newViewer = await Viewer.create([payload], { session });

        if (!newViewer.length) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
        }

        await session.commitTransaction();
        await session.endSession();

        return newViewer;
    } catch (err: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(err);
    }
};




export const UserServices = {
    createAdminIntoDB,
    createModifierIntoDB,
    createViewerIntoDB
}