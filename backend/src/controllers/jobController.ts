import { Request, Response } from 'express';
import { JobService } from '../services/jobService';
import { asyncHandler } from '../utils/asyncHandler';

export class JobController {
    static create = asyncHandler(async (req: Request, res: Response) => {
        const job = await JobService.createJob(req.body);
        res.status(201).json({
            success: true,
            data: job,
        });
    });

    static update = asyncHandler(async (req: Request, res: Response) => {
        const job = await JobService.updateJob(req.params.id as string, req.body);
        res.status(200).json({
            success: true,
            data: job,
        });
    });

    static delete = asyncHandler(async (req: Request, res: Response) => {
        await JobService.deleteJob(req.params.id as string);
        res.status(200).json({
            success: true,
            message: 'Job deleted successfully',
        });
    });

    static getAll = asyncHandler(async (req: Request, res: Response) => {
        const jobs = await JobService.getAllJobs(req.query);
        res.status(200).json({
            success: true,
            data: jobs,
        });
    });

    static getById = asyncHandler(async (req: Request, res: Response) => {
        const job = await JobService.getJobById(req.params.id as string);
        res.status(200).json({
            success: true,
            data: job,
        });
    });
}
