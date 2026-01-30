import { z } from 'zod';

export const generateReferralSchema = z.object({
    body: z.object({
        code: z.string().min(3, 'Code must be at least 3 characters'),
        forRole: z.enum(['ambassador', 'faculty']),
        discountPercent: z.number().min(0).max(100),
        maxUsage: z.number().int().positive().optional(),
    }),
});

export const validateReferralSchema = z.object({
    body: z.object({
        code: z.string().min(1, 'Code is required'),
    }),
});
