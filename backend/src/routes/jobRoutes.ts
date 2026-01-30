import { Router } from 'express';
import { JobController } from '../controllers/jobController';
import { validateRequest } from '../middlewares/validateRequest';
import { jobSchema } from '../utils/jobSchemas';
import { protect, authorize } from '../middlewares/authMiddleware';

const router = Router();

// Public routes
router.get('/', JobController.getAll);
router.get('/:id', JobController.getById);

// Admin/Ambassador/Industry only (Industry role not explicitly in User model but admin can create)
router.post('/', protect, authorize('admin'), validateRequest(jobSchema), JobController.create);
router.put('/:id', protect, authorize('admin'), JobController.update);
router.delete('/:id', protect, authorize('admin'), JobController.delete);

export default router;
