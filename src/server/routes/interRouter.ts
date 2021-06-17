import { Router } from 'express';
import interController from '../controllers/interController';

const router = Router();

router.get('/all', interController.findAllInter);
router.post('/insert', interController.insertInter);
router.post('/connect', interController.FlightInterAirport);
export default router;
