import mongoose, { Schema, Document } from 'mongoose';

export interface IIndustry extends Document {
    name: string;
    website?: string;
    industryType: string;
    contactPerson: string;
    contactEmail: string;
    jobsPosted: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const industrySchema = new Schema<IIndustry>(
    {
        name: {
            type: String,
            required: [true, 'Please add an industry name'],
            unique: true,
        },
        website: {
            type: String,
        },
        industryType: {
            type: String,
            required: [true, 'Please add an industry type'],
        },
        contactPerson: {
            type: String,
            required: [true, 'Please add a contact person'],
        },
        contactEmail: {
            type: String,
            required: [true, 'Please add a contact email'],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid email',
            ],
        },
        jobsPosted: [
            {
                type: Schema.Types.ObjectId,
                ref: 'JobPost',
            },
        ],
    },
    {
        timestamps: true,
    }
);

industrySchema.index({ name: 1 });

const Industry = mongoose.model<IIndustry>('Industry', industrySchema);

export default Industry;
