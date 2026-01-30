import Application from '../models/Application';
import JobPost from '../models/JobPost';
import User from '../models/User';
import StudentProfile from '../models/StudentProfile';
import Referral from '../models/Referral';

export class ApplicationService {
    static async applyToJob(studentId: string, jobId: string, referralCode?: string) {
        const job = await JobPost.findById(jobId);
        if (!job) throw new Error('Job post not found');

        const user = await User.findById(studentId);
        if (!user) throw new Error('User not found');

        const studentProfile = await StudentProfile.findOne({ userId: studentId });
        if (!studentProfile) throw new Error('Student profile not found');

        // Check if already applied
        const existing = await Application.findOne({ studentId, jobId });
        if (existing) throw new Error('You have already applied for this job');

        let referralApplied = false;
        if (referralCode) {
            const referral = await Referral.findOne({ code: referralCode });
            if (referral && referral.usageCount < referral.maxUsage) {
                referralApplied = true;
                referral.usageCount += 1;
                await referral.save();
            }
        }

        const application = await Application.create({
            studentId,
            jobId,
            resumeUrl: user.resumeUrl || studentProfile.certifications[0], // Fallback for now
            referralApplied,
        });

        // Update job applicants
        job.applicants.push(application._id);
        await job.save();

        // Update student applications
        studentProfile.applications.push(application._id);
        await studentProfile.save();

        return application;
    }

    static async getMyApplications(studentId: string) {
        return await Application.find({ studentId }).populate('jobId', 'title location jobType');
    }

    static async getAllApplications(filters: any) {
        const query: any = {};
        if (filters.job) query.jobId = filters.job;
        if (filters.status) query.status = filters.status;

        return await Application.find(query)
            .populate('studentId', 'name email')
            .populate('jobId', 'title');
    }

    static async updateStatus(applicationId: string, status: string) {
        const application = await Application.findByIdAndUpdate(
            applicationId,
            { status },
            { new: true }
        );
        if (!application) throw new Error('Application not found');
        return application;
    }
}
