import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IUser } from '@shared/types';

export interface IUserDocument extends Omit<IUser, '_id' | 'createdAt' | 'updatedAt'>, Document {
    password: string;
    phone?: string;
    college?: mongoose.Types.ObjectId;
    branch?: string;
    yearOfStudy?: number;
    resumeUrl?: string;
    matchPassword(enteredPassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUserDocument>(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid email',
            ],
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
            minlength: 6,
            select: false,
        },
        role: {
            type: String,
            enum: ['student', 'admin', 'ambassador'],
            default: 'student',
        },
        phone: {
            type: String,
        },
        college: {
            type: Schema.Types.ObjectId,
            ref: 'College',
        },
        branch: {
            type: String,
        },
        yearOfStudy: {
            type: Number,
        },
        resumeUrl: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

// Indexes
userSchema.index({ email: 1 });
userSchema.index({ role: 1 });

// Encrypt password using bcrypt
userSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model<IUserDocument>('User', userSchema);

export default User;
