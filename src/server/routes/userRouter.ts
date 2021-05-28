import { Router } from 'express';
import userController from './../controllers/userController';

const router = Router();

router.get('/all', userController.findAllUser);

export default router;
