import { Request, Response } from 'express';
import { AmbassadorService } from '../services/ambassadorService';
import { asyncHandler } from '../utils/asyncHandler';

export class AmbassadorController {
    static getDashboard = asyncHandler(async (req: any, res: Response) => {
        const dashboard = await AmbassadorService.getDashboard(req.user.id);
        res.status(200).json({
            success: true,
            data: dashboard,
        });
    });

    static addEarning = asyncHandler(async (req: any, res: Response) => {
        const { amount } = req.body;
        const result = await AmbassadorService.addEarning(req.user.id, amount);
        res.status(200).json({
            success: true,
            data: result,
        });
    });
}
