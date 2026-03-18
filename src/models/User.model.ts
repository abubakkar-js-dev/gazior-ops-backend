import mongoose, { Document, Schema } from "mongoose";
import { IUser, UserRole } from "../interfaces/user.interface";




const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: UserRole.USER
    },
    avatar_url: String,
},{
    timestamps:true,
})


export const User = mongoose.model<IUser>('User',userSchema);