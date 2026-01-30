import { z } from 'zod';

export const jobSchema = z.object({
    body: z.object({
        industryId: z.string().min(1, 'Industry ID is required'),
        title: z.string().min(3, 'Title must be at least 3 characters'),
        description: z.string().min(10, 'Description must be at least 10 characters'),
        salary: z.string().optional(),
        location: z.string().min(1, 'Location is required'),
        jobType: z.enum(['internship', 'full-time', 'contract', 'remote']),
        requirements: z.array(z.string()).optional(),
        openings: z.number().int().positive().optional(),
        deadline: z.string().datetime('Invalid deadline date'),
    }),
});
