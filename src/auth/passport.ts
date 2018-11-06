import passport from 'passport'
import keys from '../config/keys'
import { SchemaNames } from '../db/SchemaNames'
import { UserDocument } from '../user/UserTypes'

const GoogleStrategy: any = require('passport-google-oauth20').Strategy;
import mongoose = require("mongoose")

const uuidv4 = require('uuid/v4')

export type GoogleProfile = {
    id: string
};

export class Passport {
    static initializePassport: () => void  = () => {
        const UserModel = mongoose.model(SchemaNames.users);

        passport.use(
            // 'http://localhost:5000/auth/google/callback'
            new GoogleStrategy(
                {
                    clientID: keys.googleClientID,
                    clientSecret: keys.googleClientSecret,
                    callbackURL: '/auth/google/callback'
                },
                (accessToken: string, refreshToken: string, profile: GoogleProfile, done: any) => {
                    const user: UserDocument = {
                        googleId: profile.id,
                        authType: 'google',
                        userId: uuidv4()
                    };
                    console.log('user', user);
                    new UserModel(user).save();
                }

            )
        );
    }
}



