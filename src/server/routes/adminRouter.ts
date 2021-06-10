import { Router } from 'express';
import userController from '../controllers/userController';
import authController from '../controllers/authController';
const router = Router();

router.use(authController.IsloggedIn);
router.get('/');
router.get('/dashboard', userController.findAllUser);
router.post('/', authController.register);
router.post('/login', authController.login);
router.post('/create',userController.insertdataUser);
export default router;
