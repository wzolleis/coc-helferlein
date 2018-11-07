import express from 'express';
import { authRoutes } from './auth/authRoutes';
import { Db } from './db/Database';
import passport from 'passport'
import { initializePassport } from './auth/authUtil';
import cookieSession from 'cookie-session';
import config from './config/keys';

Db.init();

const COOKIE_EXPIRE_TIME_MS = 30 * 24 * 60 * 60 * 1000; // 30 Tage
const app = express();

app.use(cookieSession({
    maxAge: COOKIE_EXPIRE_TIME_MS,
    keys: [config.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

initializePassport();

export default app
