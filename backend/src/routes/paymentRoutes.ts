import { Router } from 'express';
import { PaymentController } from '../controllers/paymentController';
import { validateRequest } from '../middlewares/validateRequest';
import { serviceSchema, paymentSchema } from '../utils/paymentSchemas';
import { protect, authorize } from '../middlewares/authMiddleware';

const router = Router();

// Service routes
router.get('/services', PaymentController.getServices);
router.post('/services', protect, authorize('admin'), validateRequest(serviceSchema), PaymentController.createService);

// Payment routes
router.post('/create', protect, authorize('student'), validateRequest(paymentSchema), PaymentController.createPayment);
router.get('/mine', protect, authorize('student'), PaymentController.getMyPayments);

// Admin routes
router.get('/all', protect, authorize('admin'), PaymentController.getAllPayments);

export default router;
