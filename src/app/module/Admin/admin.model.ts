import { model, Schema } from "mongoose";
import { AdminModel, TAdmin } from "./admin.interface";
import { TUserName } from "../../interface/user";
import { BloodGroup, Gender } from "../../constant/user";

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

const adminSchema = new Schema<TAdmin, AdminModel>(
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
        dateOfBirth: { type: Date },
        email: {
            type: String,
            unique: true,
        },
        contactNo: { type: String },
        emergencyContactNo: {
            type: String,
        },
        bloodGroup: {
            type: String,
            enum: {
                values: BloodGroup,
            },
        },
        presentAddress: {
            type: String,
        },
        permanentAddress: {
            type: String,
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

// // generating full name
// adminSchema.virtual('fullName').get(function () {
//     return (
//         this?.name?.firstName +
//         '' +
//         this?.name?.middleName +
//         '' +
//         this?.name?.lastName
//     );
// });

// filter out deleted documents
adminSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

// adminSchema.pre('findOne', function (next) {
//     this.find({ isDeleted: { $ne: true } });
//     next();
// });

// adminSchema.pre('aggregate', function (next) {
//     this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
//     next();
// });

//checking if user is already exist!
adminSchema.statics.isUserExists = async function (id: string) {
    const existingUser = await Admin.findOne({ id });
    return existingUser;
};

export const Admin = model<TAdmin, AdminModel>('Admin', adminSchema);