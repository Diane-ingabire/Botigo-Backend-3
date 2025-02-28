import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ProductSchema = new Schema( 
    {
        productName: {
            type: String, 
            required: true
        },
        productPrice: {
            type: Number, 
            required: true
        },
        productCategory: {
            type: String, 
            required: true
        },
        productDiscount: { 
            type: Number, 
            default: 0 
        },
        images: {
            type: Array, 
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Product = model("Product", ProductSchema);
export default Product;
