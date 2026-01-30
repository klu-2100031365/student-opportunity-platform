import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorMiddleware';
import authRoutes from './routes/authRoutes';
import jobRoutes from './routes/jobRoutes';
import applicationRoutes from './routes/applicationRoutes';
import paymentRoutes from './routes/paymentRoutes';
import referralRoutes from './routes/referralRoutes';
import ambassadorRoutes from './routes/ambassadorRoutes';
import adminRoutes from './routes/adminRoutes';

dotenv.config();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/auth', authRoutes);
app.use('/jobs', jobRoutes);
app.use('/applications', applicationRoutes);
app.use('/payments', paymentRoutes);
app.use('/services', paymentRoutes);
app.use('/referral', referralRoutes);
app.use('/ambassador', ambassadorRoutes);
app.use('/admin', adminRoutes);
// Basic Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Morris Matrix API' });
});

// Error Handler
app.use(errorHandler);

export default app;
