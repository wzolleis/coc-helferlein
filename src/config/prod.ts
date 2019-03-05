import { AppConfig } from './config';

export const PROD_CONFG: AppConfig = {
  googleClientID: process.env.GOOGLE_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  mongoURI: process.env.MONGO_URI || '',
  cookieKey: process.env.COOKIE_KEY || '',
  cocApiToken: process.env.COC_API_TOKEN || ''
};