import mongoose from "mongoose";
import { DB_Name } from "../constant";

const connectToMongoDB = async (): Promise<void> => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error(
        "MONGODB_URI is not defined in the environment variables.",
      );
    }

    const mongoURI: string = `${process.env.MONGODB_URI}/${DB_Name}`;

    const connectionInstance = await mongoose.connect(mongoURI);

    console.log(
      "MongoDB connected successfully!",
      "\nHost:",
      connectionInstance.connection.host,
      "\nDatabase Name:",
      connectionInstance.connection.db?.databaseName,
    );
  } catch (err: unknown) {
    console.log("MongoDB connection error: ", err);
    process.exit(1);
  }
};

export default connectToMongoDB;
