// keys.ts - figure out what credetials to use

import { PROD_CONFG } from './prod';
import { AppConfig } from './config';


export const getConfig = (): AppConfig => {
  if (process.env.NODE_ENV === 'production') {
    return PROD_CONFG;
  }
  else {
    console.log('env = ' + process.env.NODE_ENV);
    // return the development keys
    return require('./dev');
  }
};