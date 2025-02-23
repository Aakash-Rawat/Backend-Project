import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async function(){
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      console.log(`\n mongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("MONGODB connection failed", error);
        process.exit(1);
    }
}

export default connectDB 