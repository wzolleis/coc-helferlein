import { model, Model } from 'mongoose';
import { UserModel, USERS } from '../db/Database';
import passport from 'passport';
import { AuthType, User } from '../user/UserTypes';
import { getConfig } from '../config/keys';
import { AppConfig } from '../config/config';
import LocalStrategy from 'passport-local';

const googleStrategy: any = require('passport-google-oauth20').Strategy;
// const localStrategy = require('passport-local').Strategy;

//const localStrategy = LocalStrategy;

const appConfig: AppConfig = getConfig();


export type GoogleProfile = {
  id: string,
};

export const initializePassport: () => void = () => {
  const UserModel: Model<UserModel> = model<UserModel>(USERS);

  passport.serializeUser((user: UserModel, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id: string, done) => {
    UserModel.findById(id)
      .then((existingUser: UserModel | null) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          // user not found in database...
        }
      });
  });

  passport.use(
    new googleStrategy(
      {
        clientID: appConfig.googleClientID,
        clientSecret: appConfig.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
      },
      async (accessToken: string, refreshToken: string, profile: GoogleProfile, done: any) => {
        const existingUser = await UserModel.findOne({ googleId: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        const user: User = {
          googleId: profile.id,
          authType: AuthType.google
        };

        // Noch kein User mit dieser ID, es wird ein neuer User angelegt.
        const newUser = await new UserModel(user).save();
        done(null, newUser);
      }
    )
  );

  // local strategy
  passport.use(
    new LocalStrategy(
      async (username, password, done) => {
        if (verifyUser(username, password)) {
          const user: User = {
            localId: username,
            authType: AuthType.local
          };
          done(null, user);
        } else {
          done('Zugriff verweigert', null);
        }
      }
    ));
};

const verifyUser = (username: string, password: string): boolean => {
  return username === 'djk' && password === 'djk';
};
