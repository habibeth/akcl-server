import { model, Schema } from "mongoose";
import { SwitchModel, TSwitch } from "./switch.interface";
import { switchType } from "./switch.constant";


const switchSchema = new Schema<TSwitch, SwitchModel>(
    {
        assetId: {
            type: String,
            unique: true
        },
        brand: {
            type: String,
        },
        model: {
            type: String,
        },
        port: {
            type: String,
        },
        type: {
            type: String,
            enum: switchType
        },
        price: {
            type: String,
        },
        purchaseDate: {
            type: Date,
        },
        vendor: {
            type: String,
        },
        descriptions: {
            type: String,
            default: ''
        },
        insertedBy: {
            type: String,
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    },
)


switchSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});


export const Switch = model<TSwitch, SwitchModel>('Switch', switchSchema);