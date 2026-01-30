import mongoose, { Schema, Document } from 'mongoose';

export interface IReferral extends Document {
    code: string;
    forRole: 'ambassador' | 'faculty';
    discountPercent: number;
    generatedBy: mongoose.Types.ObjectId;
    usageCount: number;
    maxUsage: number;
    createdAt: Date;
    updatedAt: Date;
}

const referralSchema = new Schema<IReferral>(
    {
        code: {
            type: String,
            required: true,
            unique: true,
        },
        forRole: {
            type: String,
            enum: ['ambassador', 'faculty'],
            required: true,
        },
        discountPercent: {
            type: Number,
            required: true,
        },
        generatedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        usageCount: {
            type: Number,
            default: 0,
        },
        maxUsage: {
            type: Number,
            default: 100,
        },
    },
    {
        timestamps: true,
    }
);

referralSchema.index({ code: 1 });

const Referral = mongoose.model<IReferral>('Referral', referralSchema);

export default Referral;
