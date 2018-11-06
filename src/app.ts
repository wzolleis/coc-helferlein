import  express from 'express';
import {authRoutes} from './auth/authRoutes';
import {Db}  from './db/Database';
import {Passport} from './auth/passport'

Db.init();
Passport.initializePassport();

const app = express();

authRoutes(app);

export default app;

