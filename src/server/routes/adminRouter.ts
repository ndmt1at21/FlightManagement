import { Router } from 'express';
import userController from '../controllers/userController';
import authController from '../controllers/authController';
import fScheduleController from '../controllers/flightScheduleController';
import settingController from '../controllers/settingController';
import flightController from '../controllers/flightController';
import interController from '../controllers/interController';
const router = Router();

router.use(authController.protect, authController.restrictTo('admin'));
// admin
router.get('/', userController.findAllUser);
router.post('/listRevenutFlight', fScheduleController.revenueFlight);
router.post('/listRevenutYear', fScheduleController.revenueYear);
router.post('/insertFlightSchedule', fScheduleController.insertFSchedule);
router.post('/updateSetting', settingController.updateSetting);
router.get('/insertFlight', flightController.findAllFlight);
router.post(
	'/insertFlight',
	flightController.insertFlight,
	interController.FlightInterAirport
);
router.post('/insertInter', interController.insertInter);
export default router;
