import mongoose, { Schema, Document } from 'mongoose';

export interface IAnalytics extends Document {
    totalStudents: number;
    totalAmbassadors: number;
    totalApplications: number;
    totalPayments: number;
    totalRevenue: number;
    topColleges: {
        collegeId: mongoose.Types.ObjectId;
        name: string;
        studentCount: number;
    }[];
    topAmbassadors: {
        ambassadorId: mongoose.Types.ObjectId;
        name: string;
        referralCount: number;
    }[];
    createdAt: Date;
    updatedAt: Date;
}

const analyticsSchema = new Schema<IAnalytics>(
    {
        totalStudents: {
            type: Number,
            default: 0,
        },
        totalAmbassadors: {
            type: Number,
            default: 0,
        },
        totalApplications: {
            type: Number,
            default: 0,
        },
        totalPayments: {
            type: Number,
            default: 0,
        },
        totalRevenue: {
            type: Number,
            default: 0,
        },
        topColleges: [
            {
                collegeId: { type: Schema.Types.ObjectId, ref: 'College' },
                name: String,
                studentCount: Number,
            },
        ],
        topAmbassadors: [
            {
                ambassadorId: { type: Schema.Types.ObjectId, ref: 'AmbassadorProfile' },
                name: String,
                referralCount: Number,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Analytics = mongoose.model<IAnalytics>('Analytics', analyticsSchema);

export default Analytics;
