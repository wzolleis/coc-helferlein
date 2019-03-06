import clashApi from 'clash-of-clans-api';
import { getConfig } from '../../config/keys';
import { model, Model } from 'mongoose';
import { ClanModel, CLANS } from '../../db/Database';

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

export const clanByTag = async (tag: string) => {
  const ClanModel: Model<ClanModel> = model<ClanModel>(CLANS);
  const existingClan = await ClanModel.findOne({ tag });
  if (existingClan) {
    return existingClan;
  }

  const clan: ClanModel = await cocApiClient().clanByTag(tag);
  console.log('clan (api) =', clan);

  const newClan = await new ClanModel(clan).save();
  console.log('new clan = ', newClan);
  return newClan;
  // return clan;
};