import { createContact, getAllContact, getContactById, deleteContactById, updateContactById } from "../controllers/contactController.js";
import express from 'express';
import{ admin } from "../middlewares/roleidentification.js";
import { auth } from "../middlewares/tokenVerification.js";

const contactRouter = express();

contactRouter.post('/createContact', createContact);
contactRouter.get('/getAllContact', auth,admin, getAllContact);
contactRouter.get('/getContactById/:id',  getContactById);
contactRouter.delete('/deleteContactById/:id', deleteContactById);
contactRouter.put('/updateContactById/:id',  updateContactById);



export default contactRouter;