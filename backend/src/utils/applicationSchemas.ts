import { z } from 'zod';

export const applySchema = z.object({
    body: z.object({
        jobId: z.string().min(1, 'Job ID is required'),
        referralCode: z.string().optional(),
    }),
});

export const updateStatusSchema = z.object({
    body: z.object({
        status: z.enum(['applied', 'review', 'accepted', 'rejected']),
    }),
});
