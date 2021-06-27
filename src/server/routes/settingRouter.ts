import { Router } from 'express';
import SettingController from '../controllers/settingController';

const router = Router();

router.get('/all', SettingController.showAllSetting);
router.post('/update', SettingController.updateSetting);
router.post('/create', SettingController.insertSetting);
export default router;
