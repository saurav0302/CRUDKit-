import express from 'express';
import cookieParser from 'cookie-parser';
import ApiError from './utils/ApiError.js';
import Cors from 'cors';

const app = express();

app.use(Cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());   


// Routes Import
import productRoutes from './routes/product.route.js';

// Routes
app.use('/api/v1/products', productRoutes);


// This is needed for the custom ApiError
app.use((err, req, res, next) => {
    console.error("Error:", err);
    
    // If it's our custom ApiError
    if (err instanceof ApiError) {
      return res.status(err.statusCode).json({
        success: err.success,
        message: err.message,
        errors: err.errors,
        data: err.data
      });
    }
    
    // For any other errors
    return res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
      errors: [],
      data: null
    });
});

export default app;