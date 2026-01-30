import { z } from 'zod';

export const serviceSchema = z.object({
    body: z.object({
        title: z.string().min(3, 'Title must be at least 3 characters'),
        description: z.string().min(10, 'Description must be at least 10 characters'),
        price: z.number().positive('Price must be positive'),
        discountWithReferral: z.number().min(0).optional(),
    }),
});

export const paymentSchema = z.object({
    body: z.object({
        serviceId: z.string().min(1, 'Service ID is required'),
        amount: z.number().positive('Amount must be positive'),
        referralCodeUsed: z.string().optional(),
        applicationId: z.string().optional(),
    }),
});
