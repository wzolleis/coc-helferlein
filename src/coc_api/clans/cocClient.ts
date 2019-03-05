import clashApi from 'clash-of-clans-api';
import { getConfig } from '../../config/keys';

const cocApiToken = getConfig().cocApiToken;


export const cocApiClient = () => {
  if (process.env.NODE_ENV == 'production') {
    return clashApi({
      token: cocApiToken,
      request: {
        proxy: process.env.QUOTAGUARDSTATIC_URL
      }
    });
  }

  // development mode
  return clashApi({
    token: cocApiToken
  });
};