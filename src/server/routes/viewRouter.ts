import { Router } from 'express';
import authController from '../controllers/authController';
import fScheduleController from '../controllers/flightScheduleController';
import viewController from '../controllers/viewController';
const router = Router();

router.get('/', authController.IsloggedIn, viewController.indexView);
router.get(
	'/search',
	authController.IsloggedIn,
	fScheduleController.searchScheduleFlight
);
export default router;
