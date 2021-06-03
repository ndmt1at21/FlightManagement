import { Router } from 'express';
import systemController from '../controllers/systemController';

const router = Router();

router.get('/all', systemController.showAllSystem);
router.post('/update', systemController.updateSystem);
router.post('/create',systemController.insertSystem);
export default router;
