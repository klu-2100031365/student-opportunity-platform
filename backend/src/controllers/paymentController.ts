import { Request, Response } from 'express';
import { PaymentService } from '../services/paymentService';
import { asyncHandler } from '../utils/asyncHandler';

export class PaymentController {
    static createService = asyncHandler(async (req: Request, res: Response) => {
        const service = await PaymentService.createService(req.body);
        res.status(201).json({
            success: true,
            data: service,
        });
    });

    static getServices = asyncHandler(async (req: Request, res: Response) => {
        const services = await PaymentService.getActiveServices();
        res.status(200).json({
            success: true,
            data: services,
        });
    });

    static createPayment = asyncHandler(async (req: any, res: Response) => {
        const { serviceId, amount, referralCodeUsed, applicationId } = req.body;
        const payment = await PaymentService.createPayment(
            req.user.id,
            serviceId,
            amount,
            referralCodeUsed,
            applicationId
        );
        res.status(201).json({
            success: true,
            data: payment,
        });
    });

    static getMyPayments = asyncHandler(async (req: any, res: Response) => {
        const payments = await PaymentService.getMyPayments(req.user.id);
        res.status(200).json({
            success: true,
            data: payments,
        });
    });

    static getAllPayments = asyncHandler(async (req: Request, res: Response) => {
        const payments = await PaymentService.getAllPayments();
        res.status(200).json({
            success: true,
            data: payments,
        });
    });
}
