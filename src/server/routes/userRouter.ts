import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.get('/all', userController.findAllUser);
router.post('/insert', userController.insertUser);
router.post('/create',userController.insertdataUser);
export default router;
