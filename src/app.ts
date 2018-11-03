import express from 'express';
import {initializePassport} from './auth/passport'
import {authRoutes} from './auth/authRoutes';

initializePassport();

const app = express();

authRoutes(app);

export default app;

