const Products= require ('../../mongo/models/products');

const createProduct = async (req, res)=>{
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
const deleteProduct = (req, res)=>{};

const getProducts = async (req, res)=>{
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

const getProductsByUser = async (req, res)=>{
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


module.exports={
    createProduct,
    deleteProduct,
    getProducts,
    getProductsByUser
};