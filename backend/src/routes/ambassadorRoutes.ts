import { Router } from 'express';
import { AmbassadorController } from '../controllers/ambassadorController';
import { protect, authorize } from '../middlewares/authMiddleware';

const router = Router();

router.get('/dashboard', protect, authorize('ambassador'), AmbassadorController.getDashboard);
router.post('/add-earning', protect, authorize('ambassador'), AmbassadorController.addEarning);

export default router;
