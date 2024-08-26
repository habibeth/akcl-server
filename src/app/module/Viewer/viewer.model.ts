import { model, Schema } from "mongoose";
import { TUserName } from "../../interface/user";
import { BloodGroup, Gender } from "../../constant/user";
import { TViewer, ViewerModel } from "./viewer.interface";

const userNameSchema = new Schema<TUserName>({
    firstName: {
        type: String,
        trim: true,
        maxlength: [20, 'Name can not be more than 20 characters'],
    },
    middleName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: [20, 'Name can not be more than 20 characters'],
    },
});

const viewerSchema = new Schema<TViewer, ViewerModel>(
    {
        id: {
            type: String,
            unique: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            required: [true, 'User id is required'],
            unique: true,
            ref: 'User',
        },
        designation: {
            type: String,
        },
        name: {
            type: userNameSchema,
        },
        gender: {
            type: String,
            enum: {
                values: Gender,
                message: '{VALUE} is not a valid gender',
            },
        },
        email: {
            type: String,
            unique: true,
        },
        contactNo: { type: String },
        emergencyContactNo: {
            type: String,
            default: ''
        },
        bloodGroup: {
            type: String,
            enum: {
                values: BloodGroup,
            },
            default: ''
        },
        presentAddress: {
            type: String,
            default: ''
        },
        permanentAddress: {
            type: String,
            default: ''
        },
        profileImg: { type: String, default: '' },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true
    },
);


// filter out deleted documents
viewerSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

//checking if user is already exist!
viewerSchema.statics.isUserExists = async function (id: string) {
    const existingUser = await Viewer.findOne({ id });
    return existingUser;
};

export const Viewer = model<TViewer, ViewerModel>('Viewer', viewerSchema);