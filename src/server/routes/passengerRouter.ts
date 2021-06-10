import { Router } from 'express';
import passengerController from '../controllers/passengerController';

const router = Router();

router.get('/all', passengerController.findAllPassenger);
router.post('/buy', passengerController.buyTicket);
router.post('/cancel',passengerController.cancelTicket);
export default router;
