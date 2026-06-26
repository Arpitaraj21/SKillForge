import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URL}/skillforge`)
        console.log("Database connected!")
    } catch (error) {
        console.log("error connecting the database");
        console.log("error", error)
        return {
            "message": 'Failed to connect the database',
            "status": 500,
            "success": false
        }
    }
}


export default connectDB;