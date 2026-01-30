import Service from '../models/Service';
import Payment from '../models/Payment';
import StudentProfile from '../models/StudentProfile';
import Application from '../models/Application';

export class PaymentService {
    static async createService(serviceData: any) {
        return await Service.create(serviceData);
    }

    static async getActiveServices() {
        return await Service.find({ isActive: true });
    }

    static async createPayment(studentId: string, serviceId: string, amount: number, referralCodeUsed?: string, applicationId?: string) {
        const service = await Service.findById(serviceId);
        if (!service) throw new Error('Service not found');

        const payment = await Payment.create({
            studentId,
            serviceId,
            amount,
            referralCodeUsed,
            status: 'pending',
        });

        // Mock successful payment processing
        // In real scenario, wait for callback
        payment.status = 'success';
        payment.transactionId = `TXN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        await payment.save();

        // Update student premium status if applicable
        if (service.title.toLowerCase().includes('premium') || service.title.toLowerCase().includes('boost')) {
            await StudentProfile.findOneAndUpdate({ userId: studentId }, { isPremiumUser: true });
        }

        // Update application if linked
        if (applicationId) {
            await Application.findByIdAndUpdate(applicationId, {
                servicePurchased: true,
                paidAmount: amount,
                paymentId: payment._id,
            });
        }

        return payment;
    }

    static async getMyPayments(studentId: string) {
        return await Payment.find({ studentId }).populate('serviceId', 'title price');
    }

    static async getAllPayments() {
        return await Payment.find().populate('studentId', 'name').populate('serviceId', 'title');
    }
}
