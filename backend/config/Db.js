import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async() =>{
    try{
        await mongoose.connect('mongodb+srv://adwaithkrishna43:v48LcWf34ZuzqzSZ@cluster0.bwhc8.mongodb.net/JobPortal?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Database Connected")
    }
    catch(error){
        console.error(error)
        process.exit(1)
    }
}

export default connectDb;