import mongoose, { Schema, Document } from 'mongoose';

export interface IStudentProfile extends Document {
    userId: mongoose.Types.ObjectId;
    skills: string[];
    cgpa?: number;
    experience: {
        company: string;
        role: string;
        duration: string;
    }[];
    certifications: string[];
    applications: mongoose.Types.ObjectId[];
    referralCodeUsed?: string;
    isPremiumUser: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const studentProfileSchema = new Schema<IStudentProfile>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            unique: true,
        },
        skills: [String],
        cgpa: {
            type: Number,
        },
        experience: [
            {
                company: String,
                role: String,
                duration: String,
            },
        ],
        certifications: [String],
        applications: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Application',
            },
        ],
        referralCodeUsed: {
            type: String,
        },
        isPremiumUser: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

studentProfileSchema.index({ userId: 1 });

const StudentProfile = mongoose.model<IStudentProfile>('StudentProfile', studentProfileSchema);

export default StudentProfile;
