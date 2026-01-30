import Referral from '../models/Referral';

export class ReferralService {
    static async generateCode(data: any) {
        const { code, forRole, discountPercent, generatedBy, maxUsage } = data;

        // Check if code already exists
        const existing = await Referral.findOne({ code });
        if (existing) throw new Error('Referral code already exists');

        return await Referral.create({
            code,
            forRole,
            discountPercent,
            generatedBy,
            maxUsage,
        });
    }

    static async validateCode(code: string) {
        const referral = await Referral.findOne({ code });
        if (!referral) throw new Error('Invalid referral code');

        if (referral.usageCount >= referral.maxUsage) {
            throw new Error('Referral code has reached its maximum usage');
        }

        return referral;
    }
}
