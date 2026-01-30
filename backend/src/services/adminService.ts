import User from '../models/User';
import StudentProfile from '../models/StudentProfile';
import AmbassadorProfile from '../models/AmbassadorProfile';
import JobPost from '../models/JobPost';
import Application from '../models/Application';
import Payment from '../models/Payment';

export class AdminService {
    static async getStats() {
        const totalStudents = await User.countDocuments({ role: 'student' });
        const totalAmbassadors = await User.countDocuments({ role: 'ambassador' });
        const totalApplications = await Application.countDocuments();
        const payments = await Payment.find({ status: 'success' });
        const totalRevenue = payments.reduce((acc, curr) => acc + curr.amount, 0);
        const totalPayments = payments.length;

        const latestApplications = await Application.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .populate('studentId', 'name')
            .populate('jobId', 'title');

        return {
            totalStudents,
            totalAmbassadors,
            totalApplications,
            totalPayments,
            totalRevenue,
            latestApplications,
        };
    }

    static async getUsers(filters: any) {
        const query: any = {};
        if (filters.role) query.role = filters.role;
        return await User.find(query).select('-password');
    }

    static async getJobs() {
        return await JobPost.find().populate('industryId', 'name');
    }
}
