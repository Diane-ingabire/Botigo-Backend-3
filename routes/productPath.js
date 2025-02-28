import {createProduct, getAllProduct,  getProductById, deleteProductById, updateProductById} from "../controllers/product.controllers.js";
import express from 'express';
import configureMulter from "../utils/Multer.js";
import{ admin } from "../middlewares/roleidentification.js";
import { auth } from "../middlewares/tokenVerification.js";
const productRouter = express();
const upload=configureMulter();

productRouter.post('/createProduct', upload, createProduct);
productRouter.get('/getAllProduct', getAllProduct);
productRouter.get('/getProductById/:id',auth, admin,getProductById);
productRouter.delete('/deleteProductById/:id', auth,admin,deleteProductById);
productRouter.put('/updateProductById/:id',auth ,admin,updateProductById);



export default productRouter;