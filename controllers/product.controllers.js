import Product from "../models/product.model.js";
import cloudinary from "../utils/cloudinary.js";

export const createProduct = async (req, res) => {
    try {
        if(!req.files|| !req.files.images || req.files.images.length ===0){
            return res.status(400).json({success:false,message:"No image uploaded"});
        }
            const result = await cloudinary.uploader.upload(req.files.images[0].path);
        const { productName, productPrice, productCategory, productDiscount } = req.body;
        const images= result.secure_url;
        const newProduct = new Product({ productName, productPrice, productCategory, productDiscount,images });

        await newProduct.save();

        res.status(201).json({ success: true, message: 'Product created successfully', product: newProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

export const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.status(200).json({ success: true, product });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

export const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

export const updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.status(200).json({ success: true, message: "Product updated successfully", product: updatedData });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};
