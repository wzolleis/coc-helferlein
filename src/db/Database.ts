import { Document, model, Schema } from 'mongoose';
import { User } from '../user/UserTypes';
import { getConfig } from '../config/keys';
import { AppConfig } from '../config/config';
import { Clan } from '../clan/clanTypes';
import mongoose = require('mongoose');

export const USERS: string = 'users';
export const CLANS: string = 'clans';

export interface UserModel extends User, Document {

}

export interface ClanModel extends Clan, Document {

}

export const USER_SCHEMA: Schema = new Schema({
  googleId: String,
  authType: String
});

export const CLAN_SCHEMA: Schema = new Schema({
  tag: String,
  name: String,
  location: {
    id: Number,
    name: String,
    isCountry: Boolean
  },
  badgeUrls: {
    small: String,
    large: String,
    medium: String
  },
  clanLevel: Number,
  clanPoints: Number,
  clanVersusPoints: Number,
  members: Number,
  type: String,
  requiredTrophies: Number,
  warFrequency: String,
  warWinStreak: Number,
  warWins: Number,
  warTies: Number,
  warLosses: Number,
  isWarLogPublic: Boolean,
  description: String
});

export class Db {

  public static init = () => {
    Db.connect();
    Db.registerSchemes();
  };

  static connect = () => {
    const appConfig: AppConfig = getConfig();
    mongoose.connect(appConfig.mongoURI, { useNewUrlParser: true });
  };

  static registerSchemes = () => {
    model<UserModel>(USERS, USER_SCHEMA);
    model<ClanModel>(CLANS, CLAN_SCHEMA);
  };

  public static debug(debug: any) {
    mongoose.set('debug', debug);
  }
}
