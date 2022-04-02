import express from "express";
import { createProduct,getAllProducts } from "../Controllers/productController.js"; 

const router=express.Router(); 

// localhost:5000/posts

router.get('/',getAllProducts);
router.post('/',createProduct);

export default router;      

