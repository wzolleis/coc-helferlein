import Config from '../config/keys'
import { Document, model, Schema } from 'mongoose'
import { User } from '../user/UserTypes'
import mongoose = require("mongoose")

export const USERS: string = 'users';

export interface UserModel extends User, Document {

}


export let UserSchema: Schema = new Schema({
    googleId: String,
    authType: String,
    userId: String
});


export class Db {

    public static init = () => {
        Db.connect();
        Db.registerSchemes();
    }

    static connect = () => {
        mongoose.connect(Config.mongoURI, { useNewUrlParser: true });

    };

    static registerSchemes = () => {
        model<UserModel>(USERS, UserSchema);
    };

    public static debug(debug:any) {
        mongoose.set('debug', debug);
    }
}

