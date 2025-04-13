import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { Product } from "../models/product.model.js";
import mongoose, { mongo } from "mongoose";

// create-product
const createProduct = AsyncHandler(async (req, res, next) => {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
        throw new ApiError("All fields are required", 400);
    }

    const product = await Product.create({ name, price, image });

    if (!product) {
        throw new ApiError("Product not created", 400);
    }

    return res.status(201).json(new ApiResponse(201,"Product created" , product));
});

// get-all-product
const getAllProduct = AsyncHandler(async (req, res, next) => {
    const products = await Product.find();

    if (!products) {
       throw new ApiError("Product not found", 400);
    }

    return res.status(200).json(new ApiResponse(200, "Product found" , products));
});

// update-product/:id
const updateProduct = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { name, price, image } = req.body;

    if(mongoose.Types.ObjectId.isValid(id) === false) {
        throw new ApiError("Product id is not valid", 400);

    }

    if (!name && !price && !image) {
        throw new ApiError("At least one field is required", 400);
    }

    const product = await Product.findByIdAndUpdate(id, { name, price, image }, { new: true });

    if (!product) {
        throw new ApiError("Product not updated", 400);
    }

    return res.status(200).json(new ApiResponse(200, "Product updated" , product));
});


// delete-product/:id
const deleteProduct = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
       throw new ApiError("Product id is required", 400);
    }

    if(mongoose.Types.ObjectId.isValid(id) === false) {
        throw new ApiError("Product id is not valid", 400);

    }

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
        throw new ApiError("Product not deleted", 400);
    }

    return res.status(200).json(new ApiResponse(200, "Product deleted" , {name: product.name, price: product.price}));
});

export { createProduct, getAllProduct, updateProduct, deleteProduct };