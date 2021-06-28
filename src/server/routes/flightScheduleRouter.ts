import authController from '../controllers/authController';
import { Router } from 'express';

import fSchedule from '../controllers/flightScheduleController';
const router = Router();


router.post('/insert', fSchedule.insertFSchedule);
export default router;
