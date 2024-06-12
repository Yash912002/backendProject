import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    // Read about connection instance
    console.log(
      `\n MongoDB connected DB Host :- ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error :- ", error);
    // Read about process exit and exit status code
    process.exit(1);
  }
};

export default connectDB;
