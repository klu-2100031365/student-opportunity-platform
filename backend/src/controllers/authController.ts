import { Request, Response } from 'express';
import { AuthService } from '../services/authService';
import { asyncHandler } from '../utils/asyncHandler';

export class AuthController {
    static register = asyncHandler(async (req: Request, res: Response) => {
        // Only admin can create non-student roles
        if (req.body.role && req.body.role !== 'student') {
            // This check would normally happen if a user is logged in as admin
            // For initial setup, we might allow it or restrict based on a secret
        }

        const result = await AuthService.registerUser(req.body);
        res.status(201).json({
            success: true,
            data: result,
        });
    });

    static login = asyncHandler(async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const result = await AuthService.loginUser(email, password);
        res.status(200).json({
            success: true,
            data: result,
        });
    });

    static getMe = asyncHandler(async (req: any, res: Response) => {
        const result = await AuthService.getMe(req.user.id, req.user.role);
        res.status(200).json({
            success: true,
            data: result,
        });
    });
}
