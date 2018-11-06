import { model, Model } from "mongoose"
import { UserModel, USERS } from '../db/Database'
import passport from 'passport'
import keys from '../config/keys'
import { User } from '../user/UserTypes'

const GoogleStrategy: any = require('passport-google-oauth20').Strategy;
const uuidv4 = require('uuid/v4')


export type GoogleProfile = {
    id: string
};

export const initializePassport: () => void = () => {
    const UserModel: Model<UserModel> = model<UserModel>(USERS);

    passport.use(
        // 'http://localhost:5000/auth/google/callback'
        new GoogleStrategy(
            {
                clientID: keys.googleClientID,
                clientSecret: keys.googleClientSecret,
                callbackURL: '/auth/google/callback'
            },
            (accessToken: string, refreshToken: string, profile: GoogleProfile, done: any) => {
                UserModel.findOne({googleId: profile.id})
                    .then((existingUser: UserModel | null) => {
                        if (existingUser) {
                            done(null, existingUser);
                        }
                        else {
                            const user: User = {
                                googleId: profile.id,
                                authType: 'google',
                                userId: uuidv4()
                            };
                            new UserModel(user).save()
                                .then((newUser: UserModel) => {
                                    done(null, newUser);
                                })
                                .catch((reason) => {
                                    console.log('reason', reason);
                                })
                        }
                    })
                    .catch((reason) => {
                        console.log('reason 2', reason);
                    });
            }
        )
    );
}