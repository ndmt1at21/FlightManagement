import { Router } from 'express';
import userController from '../controllers/userController';
import authController from '../controllers/authController';
const router = Router();

//router.use(authController.IsloggedIn);
router.get('/all', userController.findAllUser);
router.post('/register', authController.register);
router.post('/login', authController.IsloggedIn, authController.login);
router.get('/logout', authController.logout);
router.post('/create', userController.insertdataUser);
export default router;
