import { model, Model } from 'mongoose';
import { USERS } from '../db/Database';
import passport from 'passport';
import { AuthType, User } from '../user/UserTypes';
import { getConfig } from '../config/keys';
import { AppConfig } from '../config/config';
import passportLocal from 'passport-local';
import uuid from 'uuid';
import { UserModel } from '../db/databaseSchemes';

const appConfig: AppConfig = getConfig();

const LocalStrategy = passportLocal.Strategy;
const GoogleStrategy: any = require('passport-google-oauth20').Strategy;


export type GoogleProfile = {
  id: string,
};

export const initializePassport: () => void = () => {
  const UserModel: Model<UserModel> = model<UserModel>(USERS);

  passport.serializeUser((user: UserModel, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: string, done) => {
    const existingUser = await UserModel.findById(id);
    if (existingUser) {
      done(null, existingUser);
    } else {
      // user not found in database...
    }
  });

  passport.use(
    new GoogleStrategy(
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
        const passwordReversed = reverseString(password);
        const existingUser = await UserModel.findOne({ name: username, password: passwordReversed });
        if (existingUser) {
          return done(null, existingUser);
        }

        // es wird ein neuer User angelegt.
        if (verifyUser(username, password)) {
          var uuid = uuid.v4();
          const user: User = {
            localId: uuid,
            name: username,
            password: passwordReversed,
            authType: AuthType.local
          };
          const newUser = await new UserModel(user).save();

          done(null, newUser);
        } else {
          // falsches Passwort oder Username
          done(null, false);
        }
      }
    ));
};

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

const verifyUser = (username: string, password: string): boolean => {
  return username === appConfig.localUser && password === appConfig.localPassword;
};
