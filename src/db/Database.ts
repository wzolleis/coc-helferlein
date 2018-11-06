import Config from '../config/keys'
import mongoose = require("mongoose");
import { SchemaNames } from './SchemaNames'
import { Schema } from 'mongoose'

export class Db {

    public static init = () => {
        Db.connect();
        Db.initModels();
    }

    static connect = () => {
        mongoose.connect(Config.mongoURI, { useNewUrlParser: true });

    };

    static initModels = () => {
        const userSchema: Schema = Db.initUserSchema();

        mongoose.model(SchemaNames.users, userSchema);
    };



    private static initUserSchema = (): Schema => {
       return new Schema({
            googleId: String,
            authType: String,
            userId: String
        });
    }




    public static debug(debug:any) {
        mongoose.set('debug', debug);
    }
}