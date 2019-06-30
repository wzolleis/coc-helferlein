import { Document, model, Schema } from 'mongoose';
import { User } from '../user/UserTypes';
import { getConfig } from '../config/keys';
import { AppConfig } from '../config/config';
import mongoose = require('mongoose');

export const USERS: string = 'users';
export const CLANS: string = 'clans';

export interface UserModel extends User, Document {

}

export const USER_SCHEMA: Schema = new Schema({
  googleId: String,
  authType: String
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
  };

  public static debug(debug: any) {
    mongoose.set('debug', debug);
  }
}
