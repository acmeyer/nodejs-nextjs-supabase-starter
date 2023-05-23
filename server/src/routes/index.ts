import express from 'express';
import userRoutes from './userRoutes';
import { authHandler } from '../middleware/authenticationHandler';

const router = express.Router();

router.use('/users', authHandler, userRoutes);

export default router;
