import { Router } from 'express';
import { ReferralController } from '../controllers/referralController';
import { validateRequest } from '../middlewares/validateRequest';
import { generateReferralSchema, validateReferralSchema } from '../utils/referralSchemas';
import { protect, authorize } from '../middlewares/authMiddleware';

const router = Router();

router.post('/generate', protect, authorize('admin', 'ambassador'), validateRequest(generateReferralSchema), ReferralController.generate);
router.post('/validate', validateRequest(validateReferralSchema), ReferralController.validate);

export default router;
