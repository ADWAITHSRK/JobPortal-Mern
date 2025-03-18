import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connected")
    }
    catch(error){
        console.error(error)
        process.exit(1)
    }
}

export default connectDb;