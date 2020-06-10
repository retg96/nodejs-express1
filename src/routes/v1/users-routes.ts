import express from 'express';
import {isAuth,isValidHostname,isAdmin} from '../../middlewares/auth';

//importamos el controlador users-controller
import usersController from '../../controllers/v1/users-controller';

const router = express.Router();

router.post('/create', usersController.createUser);
router.post('/login', usersController.login);
router.post('/update', isValidHostname,isAuth, usersController.updateUser);
router.post('/delete', isAuth, isAdmin, usersController.deleteUser);
router.get('/get-all', isAuth, isAdmin, usersController.getUsers);

export default router;