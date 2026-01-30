import mongoose, { Schema, Document } from 'mongoose';

export interface IApplication extends Document {
    studentId: mongoose.Types.ObjectId;
    jobId: mongoose.Types.ObjectId;
    resumeUrl: string;
    status: 'applied' | 'review' | 'accepted' | 'rejected';
    servicePurchased: boolean;
    paidAmount: number;
    referralApplied: boolean;
    paymentId?: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const applicationSchema = new Schema<IApplication>(
    {
        studentId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        jobId: {
            type: Schema.Types.ObjectId,
            ref: 'JobPost',
            required: true,
        },
        resumeUrl: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['applied', 'review', 'accepted', 'rejected'],
            default: 'applied',
        },
        servicePurchased: {
            type: Boolean,
            default: false,
        },
        paidAmount: {
            type: Number,
            default: 0,
        },
        referralApplied: {
            type: Boolean,
            default: false,
        },
        paymentId: {
            type: Schema.Types.ObjectId,
            ref: 'Payment',
        },
    },
    {
        timestamps: true,
    }
);

applicationSchema.index({ studentId: 1, jobId: 1 }, { unique: true });

const Application = mongoose.model<IApplication>('Application', applicationSchema);

export default Application;
