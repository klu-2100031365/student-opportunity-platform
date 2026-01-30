import AmbassadorProfile from '../models/AmbassadorProfile';
import User from '../models/User';

export class AmbassadorService {
    static async getDashboard(ambassadorId: string) {
        const profile = await AmbassadorProfile.findOne({ userId: ambassadorId })
            .populate('referredStudents', 'name email createdAt')
            .populate('collegeId', 'name');

        if (!profile) throw new Error('Ambassador profile not found');
        return profile;
    }

    static async addEarning(userId: string, amount: number) {
        const profile = await AmbassadorProfile.findOne({ userId });
        if (!profile) throw new Error('Ambassador profile not found');

        profile.totalEarnings += amount;
        profile.earningsHistory.push({ amount, date: new Date() });
        await profile.save();

        return profile;
    }
}
