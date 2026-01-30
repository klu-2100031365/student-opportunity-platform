import { Router } from 'express';
import { AdminController } from '../controllers/adminController';
import { protect, authorize } from '../middlewares/authMiddleware';

const router = Router();

router.use(protect);
router.use(authorize('admin'));

router.get('/stats', AdminController.getStats);
router.get('/users', AdminController.getUsers);
router.get('/jobs', AdminController.getJobs);

export default router;
