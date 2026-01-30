import mongoose, { Schema, Document } from 'mongoose';

export interface IAdminProfile extends Document {
    userId: mongoose.Types.ObjectId;
    accessLevel: number;
    createdAt: Date;
    updatedAt: Date;
}

const adminProfileSchema = new Schema<IAdminProfile>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            unique: true,
        },
        accessLevel: {
            type: Number,
            default: 1,
        },
    },
    {
        timestamps: true,
    }
);

adminProfileSchema.index({ userId: 1 });

const AdminProfile = mongoose.model<IAdminProfile>('AdminProfile', adminProfileSchema);

export default AdminProfile;
