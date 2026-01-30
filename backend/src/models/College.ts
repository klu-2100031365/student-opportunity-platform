import mongoose, { Schema, Document } from 'mongoose';

export interface ICollege extends Document {
    name: string;
    address?: string;
    city: string;
    state: string;
    ambassadorIds: mongoose.Types.ObjectId[];
    students: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const collegeSchema = new Schema<ICollege>(
    {
        name: {
            type: String,
            required: [true, 'Please add a college name'],
            unique: true,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
            required: [true, 'Please add a city'],
        },
        state: {
            type: String,
            required: [true, 'Please add a state'],
        },
        ambassadorIds: [
            {
                type: Schema.Types.ObjectId,
                ref: 'AmbassadorProfile',
            },
        ],
        students: [
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

collegeSchema.index({ name: 1 });
collegeSchema.index({ city: 1 });

const College = mongoose.model<ICollege>('College', collegeSchema);

export default College;
