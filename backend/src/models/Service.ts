import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
    title: string;
    description: string;
    price: number;
    discountWithReferral: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const serviceSchema = new Schema<IService>(
    {
        title: {
            type: String,
            required: [true, 'Please add a service title'],
            unique: true,
        },
        description: {
            type: String,
            required: [true, 'Please add a service description'],
        },
        price: {
            type: Number,
            required: [true, 'Please add a price'],
        },
        discountWithReferral: {
            type: Number,
            default: 0,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

serviceSchema.index({ title: 1 });

const Service = mongoose.model<IService>('Service', serviceSchema);

export default Service;
