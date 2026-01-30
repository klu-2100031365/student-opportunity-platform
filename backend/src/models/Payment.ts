import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment extends Document {
    studentId: mongoose.Types.ObjectId;
    serviceId: mongoose.Types.ObjectId;
    amount: number;
    status: 'pending' | 'success' | 'failed';
    transactionId?: string;
    referralCodeUsed?: string;
    createdAt: Date;
    updatedAt: Date;
}

const paymentSchema = new Schema<IPayment>(
    {
        studentId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        serviceId: {
            type: Schema.Types.ObjectId,
            ref: 'Service',
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'success', 'failed'],
            default: 'pending',
        },
        transactionId: {
            type: String,
        },
        referralCodeUsed: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

paymentSchema.index({ studentId: 1 });
paymentSchema.index({ transactionId: 1 });

const Payment = mongoose.model<IPayment>('Payment', paymentSchema);

export default Payment;
