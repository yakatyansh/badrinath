import express from 'express';
import dotenv from 'dotenv';
import campaignRoutes from './routes/campaignRoutes';
import linkedinRoutes from './routes/linkedinRoutes';
import connectDB from './utils/db';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', campaignRoutes);
app.use('/api', linkedinRoutes);

export default app;
