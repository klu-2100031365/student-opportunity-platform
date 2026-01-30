import { Request, Response } from 'express';
import { AdminService } from '../services/adminService';
import { asyncHandler } from '../utils/asyncHandler';

export class AdminController {
    static getStats = asyncHandler(async (req: Request, res: Response) => {
        const stats = await AdminService.getStats();
        res.status(200).json({
            success: true,
            data: stats,
        });
    });

    static getUsers = asyncHandler(async (req: Request, res: Response) => {
        const users = await AdminService.getUsers(req.query);
        res.status(200).json({
            success: true,
            data: users,
        });
    });

    static getJobs = asyncHandler(async (req: Request, res: Response) => {
        const jobs = await AdminService.getJobs();
        res.status(200).json({
            success: true,
            data: jobs,
        });
    });
}
