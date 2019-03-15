import express, { Application } from 'express';
import { authRoutes } from './auth/authRoutes';
import { Db } from './db/Database';
import passport from 'passport';
import { initializePassport } from './auth/authUtil';
import cookieSession from 'cookie-session';
import { getConfig } from './config/keys';
import { clanRoutes } from './clan/clanRoutes';
import { teamRoutes } from './teams/teamRoutes';

export const serverApp: Application = express();

export const init = () => {
  Db.init();

  const COOKIE_EXPIRE_TIME_MS = 30 * 24 * 60 * 60 * 1000; // 30 Tage


  serverApp.use(cookieSession({
    name: 'session',
    maxAge: COOKIE_EXPIRE_TIME_MS,
    keys: [getConfig().cookieKey]
  }));
  serverApp.use(passport.initialize());
  serverApp.use(passport.session());

  authRoutes(serverApp);
  clanRoutes(serverApp);
  teamRoutes(serverApp);

  initializePassport();

  if (process.env.NODE_ENV === 'production') {

    // express will serve production assets like main.js or main.css
    serverApp.use(express.static('client/build'));

    const path = require('path');
    serverApp.get('*', (req: express.Request, res: express.Response) => {
      res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
    });
  }
};