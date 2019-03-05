import clashApi from 'clash-of-clans-api';
import { getConfig } from '../../config/keys';

const cocApiToken = getConfig().cocApiToken;

const cocApiClient = () => {
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

export const clanByTag = (tag: string) => {
  return cocApiClient().clanByTag(tag);

  /*
   const config = require('./' + tag + '.json');
    if (!config) {
      return cocApiClient().clanByTag(tag);
    }
    */
};