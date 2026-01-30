import mongoose, { Schema, Document } from 'mongoose';

export interface IAmbassadorProfile extends Document {
    userId: mongoose.Types.ObjectId;
    collegeId: mongoose.Types.ObjectId;
    referralCode: string;
    totalReferred: number;
    totalEarnings: number;
    earningsHistory: {
        amount: number;
        date: Date;
    }[];
    referredStudents: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const ambassadorProfileSchema = new Schema<IAmbassadorProfile>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            unique: true,
        },
        collegeId: {
            type: Schema.Types.ObjectId,
            ref: 'College',
            required: true,
        },
        referralCode: {
            type: String,
            required: true,
            unique: true,
        },
        totalReferred: {
            type: Number,
            default: 0,
        },
        totalEarnings: {
            type: Number,
            default: 0,
        },
        earningsHistory: [
            {
                amount: Number,
                date: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
        referredStudents: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        timestamps: true,
    }
);

ambassadorProfileSchema.index({ userId: 1 });
ambassadorProfileSchema.index({ referralCode: 1 });

const AmbassadorProfile = mongoose.model<IAmbassadorProfile>(
    'AmbassadorProfile',
    ambassadorProfileSchema
);

export default AmbassadorProfile;
