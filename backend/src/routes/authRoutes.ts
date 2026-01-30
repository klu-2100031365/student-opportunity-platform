import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { validateRequest } from '../middlewares/validateRequest';
import { registerSchema, loginSchema } from '../utils/authSchemas';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.post('/register', validateRequest(registerSchema), AuthController.register);
router.post('/login', validateRequest(loginSchema), AuthController.login);
router.get('/me', protect, AuthController.getMe);

export default router;
