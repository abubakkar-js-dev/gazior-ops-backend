import mongoose, { Document, Schema } from "mongoose";

export enum UserRole {
    USER = "user",
    ADMIN = "admin",
    TEAM_LEAD = "lead",
    ENGINEER = "engineer",
    DESIGNER = "designer",
    MARKETER = 'marketer'
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar_url?: string;
  role: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
}



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