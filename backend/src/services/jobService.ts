import JobPost from '../models/JobPost';

export class JobService {
    static async createJob(jobData: any) {
        return await JobPost.create(jobData);
    }

    static async updateJob(jobId: string, updateData: any) {
        const job = await JobPost.findByIdAndUpdate(jobId, updateData, { new: true });
        if (!job) throw new Error('Job post not found');
        return job;
    }

    static async deleteJob(jobId: string) {
        const job = await JobPost.findByIdAndDelete(jobId);
        if (!job) throw new Error('Job post not found');
        return job;
    }

    static async getAllJobs(filters: any) {
        const query: any = {};
        const { location, jobType, industry, search } = filters;

        if (location) query.location = location;
        if (jobType) query.jobType = jobType;
        if (industry) query.industryId = industry;
        if (search) {
            query.$text = { $search: search };
        }

        return await JobPost.find(query).populate('industryId', 'name website');
    }

    static async getJobById(jobId: string) {
        const job = await JobPost.findById(jobId).populate('industryId');
        if (!job) throw new Error('Job post not found');
        return job;
    }
}
