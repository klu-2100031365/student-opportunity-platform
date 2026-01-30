import { Request, Response } from 'express';
import { ReferralService } from '../services/referralService';
import { asyncHandler } from '../utils/asyncHandler';

export class ReferralController {
    static generate = asyncHandler(async (req: any, res: Response) => {
        const referral = await ReferralService.generateCode({
            ...req.body,
            generatedBy: req.user.id,
        });
        res.status(201).json({
            success: true,
            data: referral,
        });
    });

    static validate = asyncHandler(async (req: Request, res: Response) => {
        const referral = await ReferralService.validateCode(req.body.code);
        res.status(200).json({
            success: true,
            data: referral,
        });
    });
}
