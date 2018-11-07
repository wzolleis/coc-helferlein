import express from 'express';
import { authRoutes } from './auth/authRoutes';
import { Db } from './db/Database';
import passport from 'passport'
import { initializePassport } from './auth/authUtil';

Db.init();

const app = express();

app.use(passport.initialize());
authRoutes(app);

initializePassport();

export default app
