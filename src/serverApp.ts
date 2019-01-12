import express from "express";
import { authRoutes } from "./auth/authRoutes";
import { Db } from "./db/Database";
import passport from "passport";
import { initializePassport } from "./auth/authUtil";
import cookieSession from "cookie-session";
import { getConfig } from "./config/keys";

export const serverApp = express();

export const init = () => {
  Db.init();

  const COOKIE_EXPIRE_TIME_MS = 30 * 24 * 60 * 60 * 1000; // 30 Tage


  serverApp.use(cookieSession({
    name: "session",
    maxAge: COOKIE_EXPIRE_TIME_MS,
    keys: [getConfig().cookieKey]
  }));
  serverApp.use(passport.initialize());
  serverApp.use(passport.session());

  authRoutes(serverApp);

  initializePassport();
};