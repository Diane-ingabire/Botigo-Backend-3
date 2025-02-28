import express from 'express';
import contactRouter from './contactPath.js';
import productRouter from './productPath.js';
import userRouter from './userPath.js';

const mainRouter= express.Router();
mainRouter.use('/contact', contactRouter);
mainRouter.use('/products', productRouter);
mainRouter.use('/user',userRouter);

export default mainRouter;