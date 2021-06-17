import { Router } from 'express';
import flightController from '../controllers/flightController';

const router = Router();

router.get('/all', flightController.findAllFlight);
router.post('/insert', flightController.insertFlight);
router.post('/create', flightController.insertdataFlight);
router.get('/check', flightController.check);
router.post('/getname', flightController.insertdataName);
router.post('/insertname', flightController.insertFlightname);
router.get('/allname', flightController.findAllFlightName);
export default router;
