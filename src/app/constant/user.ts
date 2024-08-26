import { TBloodGroup, TGender } from "../interface/user";

export const Gender: TGender[] = ['male', 'female', 'other'];

export const BloodGroup: TBloodGroup[] = [
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
];

export const UserSearchableFields = [
    'email',
    'id',
    'contactNo',
    'emergencyContactNo',
    'name.firstName',
    'name.lastName',
    'name.middleName',
];
