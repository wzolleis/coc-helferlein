import { Model, model } from 'mongoose';
import { getConfig } from '../config/keys';
import { AppConfig } from '../config/config';
import { CWL_SEASON_SCHEMA, CwlSeasonModel, USER_SCHEMA, UserModel } from './databaseSchemes';
import mongoose = require('mongoose');

export const USERS: string = 'users';
export const CWL: string = 'cwl-season';


export class Database {

    public static init = () => {
        Database.connect();
        Database.registerSchemes();
        Database.debug('');
    };

    static connect = () => {
        const appConfig: AppConfig = getConfig();
        mongoose.connect(appConfig.mongoURI, {useUnifiedTopology: true, useNewUrlParser: true});
    };

    static registerSchemes = () => {
        model<UserModel>(USERS, USER_SCHEMA);
        model<CwlSeasonModel>(CWL, CWL_SEASON_SCHEMA);

    };

    public static debug(debug: any) {
        mongoose.set('debug', debug);
    }
}
