// keys.ts - figure out what credetials to use

import { PROD_CONFG } from './prod';

export type  AppConfig = {
  googleClientID: string,
  googleClientSecret: string,
  mongoURI: string,
  cookieKey: string
};

export const getConfig = (): AppConfig => {
  if (process.env.NODE_ENV === 'production') {
    return PROD_CONFG;
  }
  else {
    // return the development keys
    return require('./dev');
  }
};