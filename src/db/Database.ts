import { Document, model, Schema } from 'mongoose';
import { User } from '../user/UserTypes';
import { AppConfig, getConfig } from '../config/keys';
import mongoose = require('mongoose');

export const USERS: string = 'users';

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
