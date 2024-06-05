import express from 'express';
import {getProduct,postProduct,putProduct,deleteProduct} from '../Controllers/productsController.js';

const productsRouter = express.Router();

productsRouter.get('/',getProduct);

productsRouter.post('/post',postProduct);

productsRouter.put('/put:id',putProduct);

productsRouter.delete('/delete:id',deleteProduct);


export default productsRouter;


