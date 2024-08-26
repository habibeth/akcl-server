import { TAdmin } from "./admin.interface";
import { Admin } from "./admin.model";


const createAdminIntoDB = async (payload: TAdmin) => {
    // const result = await Admin.create(payload);
    return null;
}

export const AdminServices = {
    createAdminIntoDB
}