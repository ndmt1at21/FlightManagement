import { Router } from 'express';
import ticket from '../controllers/ticketController';

const router = Router();

router.get('/all', ticket.findAllTicket);
router.post('/insert', ticket.insertTicket);
router.post('/update', ticket.updateTicket);

export default router;
