const express = require('express');

//importamos nuestros middlewares
const {isAuth, isValidHostname, isAdmin} = require('../../middlewares/auth');

//importamos el controlador users-controller
const usersController = require ('../../controllers/v1/users-controller');

const router = express.Router();

router.post('/create', usersController.createUser);
router.post('/login', usersController.login);
router.post('/update', isValidHostname,isAuth, usersController.updateUser);
router.post('/delete', isAuth, isAdmin, usersController.deleteUser);
router.get('/get-all', usersController.getUsers);

module.exports= router;