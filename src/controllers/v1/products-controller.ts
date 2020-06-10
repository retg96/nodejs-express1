import {Request, Response} from 'express';
import Products from '../../mongo/models/products';



const createProduct = async (req:Request, res:Response): Promise<void>=>{
    try {
        const{title, desc, price, images, usuarioId} = req.body;
        const product = await Products.create({
            title,
            desc,
            price,
            images,
            usuario: usuarioId
        });
        res.send({status: 'OK', data: product});
    } catch (e) {
        console.log('createProduct error: ', e);
        res.status(500).send({status: 'ERROR', data: e.message});
    }
};

// const deleteProduct = (req:Request, res:Response)=>{};

const getProducts = async (req:Request, res:Response): Promise<void>=>{
    try {
      const products = await Products.find({
            price:{ $gt: 16 }
      })
      .select('title desc price')
      .populate('usuario', 'username email data role');
      res.send({status:'Ok', data:products});
    } catch (e) {
        console.log('deleteProduct error: ', e);
        res.status(500).send({status:'ERROR', data: e.message});
    }
};

const getProductsByUser = async (req:Request, res:Response): Promise<void>=>{
    try {
      const products = await Products.find({
        usuario: req.params.usuarioId
      });
      res.send({status:'Ok', data:products});
    } catch (e) {
        console.log('deleteProduct error: ', e);
        res.status(500).send({status:'ERROR', data: e.message});
    }
};


export default{
    createProduct,
    getProducts,
    getProductsByUser
};

