import { Router } from 'express';
import fSchedule from '../controllers/flightScheduleController';

const router = Router();

router.get('/all', fSchedule.findAllFSchedule);
router.post('/insert', fSchedule.insertFSchedule);

export default router;
