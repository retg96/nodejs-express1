const express = require('express');

//importamos el controlador users-controller
const productsController = require ('../../controllers/v1/products-controller');

const router = express.Router();

router.post('/create', productsController.createProduct);
router.get('/get-all', productsController.getProducts);
router.get('/get-by-user/:usuarioId', productsController.getProducts);

module.exports=router;