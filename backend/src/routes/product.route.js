import { Router } from "express";
import { createProduct, getAllProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = Router();

router.route('/get-all-product').get(getAllProduct);
router.route('/create-product').post(createProduct);
router.route('/update-product/:id').put(updateProduct);
router.route('/delete-product/:id').delete(deleteProduct);

export default router;