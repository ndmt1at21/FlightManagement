import { Router } from 'express';
import userController from '../controllers/userController';
import authController from '../controllers/authController';
import fScheduleController from '../controllers/flightScheduleController';
const router = Router();

router.post('/login', authController.login);
router.get('/dashboard', authController.IsloggedIn, userController.findAllUser);
router.post(
	'/listRevenutFlight',
	authController.IsloggedIn,
	fScheduleController.revenueFlight
);

export default router;
