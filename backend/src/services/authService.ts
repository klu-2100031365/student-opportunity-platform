import jwt from 'jsonwebtoken';
import User, { IUserDocument } from '../models/User';
import StudentProfile from '../models/StudentProfile';
import AdminProfile from '../models/AdminProfile';
import AmbassadorProfile from '../models/AmbassadorProfile';

export class AuthService {
    static generateToken(userId: string, role: string) {
        return jwt.sign({ id: userId, role }, process.env.JWT_SECRET as string, {
            expiresIn: (process.env.JWT_EXPIRES_IN || '7d') as any,
        });
    }

    static async registerUser(userData: any) {
        const { role = 'student' } = userData;
        const user = await User.create(userData);

        // Create corresponding profile
        if (role === 'student') {
            await StudentProfile.create({ userId: user._id });
        } else if (role === 'admin') {
            await AdminProfile.create({ userId: user._id });
        } else if (role === 'ambassador') {
            // For ambassador, we'd typically need a collegeId and referral code
            // This is a placeholder for now, might need more data from userData
            await AmbassadorProfile.create({
                userId: user._id,
                collegeId: userData.collegeId,
                referralCode: userData.referralCode || `AMB-${user._id.toString().slice(-6).toUpperCase()}`
            });
        }

        const token = this.generateToken(user._id.toString(), user.role);
        return { user, token };
    }

    static async loginUser(email: string, password: string) {
        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await user.matchPassword(password))) {
            throw new Error('Invalid credentials');
        }

        const token = this.generateToken(user._id.toString(), user.role);
        return { user, token };
    }

    static async getMe(userId: string, role: string) {
        const user = await User.findById(userId);
        if (!user) throw new Error('User not found');

        let profile = null;
        if (role === 'student') {
            profile = await StudentProfile.findOne({ userId });
        } else if (role === 'admin') {
            profile = await AdminProfile.findOne({ userId });
        } else if (role === 'ambassador') {
            profile = await AmbassadorProfile.findOne({ userId });
        }

        return { user, profile };
    }
}
