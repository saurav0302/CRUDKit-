import dotenv from 'dotenv';
import connectDB from './db/db.js';
import app from './app.js';
import 'colors';


dotenv.config({
    path : './.env'
});

connectDB().then(()=>{
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on : http://localhost:${PORT}`.cyan.underline);
    });
    app.on('error', (error) => {
        console.error(`Error starting server: ${error.message}`.red);
        process.exit(1);
    });
}).catch(error => {
    console.error(`Error during database connection: ${error.message}`.red);
    process.exit(1);
});