import authController from '../controllers/authController';
import { Router } from 'express';

import fSchedule from '../controllers/flightScheduleController';

const router = Router();

router.get('/all', fSchedule.findAllFSchedule);
router.post('/insert', fSchedule.insertFSchedule);
router.post(
	'/revenueFlight',
	authController.IsloggedIn,
	fSchedule.revenueFlight
);

export default router;
