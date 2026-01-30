import mongoose, { Schema, Document } from 'mongoose';

export interface IJobPost extends Document {
    industryId: mongoose.Types.ObjectId;
    title: string;
    description: string;
    salary?: string;
    location: string;
    jobType: 'internship' | 'full-time' | 'contract' | 'remote';
    requirements: string[];
    openings: number;
    deadline: Date;
    applicants: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const jobPostSchema = new Schema<IJobPost>(
    {
        industryId: {
            type: Schema.Types.ObjectId,
            ref: 'Industry',
            required: true,
        },
        title: {
            type: String,
            required: [true, 'Please add a job title'],
        },
        description: {
            type: String,
            required: [true, 'Please add a job description'],
        },
        salary: {
            type: String,
        },
        location: {
            type: String,
            required: [true, 'Please add a location'],
        },
        jobType: {
            type: String,
            enum: ['internship', 'full-time', 'contract', 'remote'],
            required: true,
        },
        requirements: [String],
        openings: {
            type: Number,
            default: 1,
        },
        deadline: {
            type: Date,
            required: [true, 'Please add a deadline'],
        },
        applicants: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Application',
            },
        ],
    },
    {
        timestamps: true,
    }
);

jobPostSchema.index({ industryId: 1 });
jobPostSchema.index({ title: 'text', description: 'text' });

const JobPost = mongoose.model<IJobPost>('JobPost', jobPostSchema);

export default JobPost;
