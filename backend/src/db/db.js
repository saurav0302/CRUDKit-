import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected: ${connection.connection.host}`.green.underline);

    } catch (error) {
        
        console.error(`Error connecting to MongoDB: ${error.message}`.red);
        process.exit(1); // Exit process with failure
    }
}

export default connectDB;