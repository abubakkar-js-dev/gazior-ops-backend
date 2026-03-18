import { Document } from "mongoose";

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
