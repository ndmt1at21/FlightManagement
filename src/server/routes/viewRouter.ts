import { Router } from 'express';
import userController from '../controllers/userController';
import authController from '../controllers/authController';
import fScheduleController from '../controllers/flightScheduleController';
import flightController from '../controllers/flightController';
const router = Router();

router.get('/', authController.IsloggedIn, flightController.findAllFlight);
router.post('/');

router.get('/dashboard', authController.IsloggedIn, userController.findAllUser);
router.post(
	'/listRevenutFlight',
	authController.protect,
	authController.restrictTo('admin'),
	fScheduleController.revenueFlight
);

export default router;
