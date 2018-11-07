import { model, Model } from 'mongoose';
import { UserModel, USERS } from '../db/Database';
import passport from 'passport';
import keys from '../config/keys';
import { User } from '../user/UserTypes';

const googleStrategy: any = require('passport-google-oauth20').Strategy;

export type GoogleProfile = {
    id: string,
};

export const initializePassport: () => void = () => {
    const UserModel: Model<UserModel> = model<UserModel>(USERS);

    passport.serializeUser((user: UserModel, done) => {
        done(user.id);
    });

    passport.deserializeUser((id: string, done) => {
        UserModel.findById(id)
            .then((existingUser: UserModel | null) => {
                if (existingUser) {
                    done(null, existingUser);
                }
                else {
                    // user not found in database...
                }
            });
    });

    passport.use(
        // 'http://localhost:5000/auth/google/callback'
        new googleStrategy(
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
                                authType: 'google'
                            };
                            new UserModel(user).save()
                                .then((newUser: UserModel) => {
                                    done(null, newUser);
                                })
                                .catch((reason) => {
                                    console.log('reason', reason);
                                });
                        }
                    })
                    .catch((reason) => {
                        console.log('reason 2', reason);
                    });
            },
        ),
    );
};
