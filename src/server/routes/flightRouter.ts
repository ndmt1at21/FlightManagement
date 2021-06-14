import { Router } from 'express';
import flightController from '../controllers/flightController';

const router = Router();

router.get('/all', flightController.findAllFlight);
router.post('/insert', flightController.insertFlight);
router.post('/create',flightController.insertdataFlight);
router.get('/check',flightController.check);
export default router;
