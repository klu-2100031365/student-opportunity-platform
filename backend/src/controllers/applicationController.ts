import { Request, Response } from 'express';
import { ApplicationService } from '../services/applicationService';
import { asyncHandler } from '../utils/asyncHandler';

export class ApplicationController {
    static apply = asyncHandler(async (req: any, res: Response) => {
        const { jobId, referralCode } = req.body;
        const application = await ApplicationService.applyToJob(req.user.id, jobId, referralCode);
        res.status(201).json({
            success: true,
            data: application,
        });
    });

    static getMine = asyncHandler(async (req: any, res: Response) => {
        const applications = await ApplicationService.getMyApplications(req.user.id);
        res.status(200).json({
            success: true,
            data: applications,
        });
    });

    static getAll = asyncHandler(async (req: Request, res: Response) => {
        const applications = await ApplicationService.getAllApplications(req.query);
        res.status(200).json({
            success: true,
            data: applications,
        });
    });

    static updateStatus = asyncHandler(async (req: Request, res: Response) => {
        const application = await ApplicationService.updateStatus(req.params.id as string, req.body.status as any);
        res.status(200).json({
            success: true,
            data: application,
        });
    });
}
