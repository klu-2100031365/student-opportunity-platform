import { Router } from 'express';
import { ApplicationController } from '../controllers/applicationController';
import { validateRequest } from '../middlewares/validateRequest';
import { applySchema, updateStatusSchema } from '../utils/applicationSchemas';
import { protect, authorize } from '../middlewares/authMiddleware';

const router = Router();

router.post('/apply', protect, authorize('student'), validateRequest(applySchema), ApplicationController.apply);
router.get('/mine', protect, authorize('student'), ApplicationController.getMine);

// Admin routes
router.get('/', protect, authorize('admin'), ApplicationController.getAll);
router.patch('/:id/status', protect, authorize('admin'), validateRequest(updateStatusSchema), ApplicationController.updateStatus);

export default router;
