import mongoose from "mongoose";

export const connectDB = async ()=> {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/TrackExpense";
    await mongoose.connect(uri);
    console.log("DB connected successfully");
  } catch (error) {
    console.error("MongoDB Connection Error: ", error.message);
    console.log("Please check your MONGODB_URI in the environment variables.");
  }
}


