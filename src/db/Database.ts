import { Document, model, Schema } from 'mongoose';
import { User } from '../user/UserTypes';
import keys from '../config/keys'
import mongoose = require('mongoose')

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
    }

    static connect = () => {
        mongoose.connect(keys.mongoURI, {useNewUrlParser: true});
        console.log('ddjsdfö');

    }

    static registerSchemes = () => {
        model<UserModel>(USERS, USER_SCHEMA);
    }

    public static debug(debug: any) {
        mongoose.set('debug', debug);
    }
}
