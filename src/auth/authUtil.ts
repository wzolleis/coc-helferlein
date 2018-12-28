import { model, Model } from "mongoose";
import { UserModel, USERS } from "../db/Database";
import passport from "passport";
import { User } from "../user/UserTypes";
import { AppConfig, getConfig } from "../config/keys";

const googleStrategy: any = require("passport-google-oauth20").Strategy;

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
        callbackURL: "/auth/google/callback",
        proxy: true
      },
      async (accessToken: string, refreshToken: string, profile: GoogleProfile, done: any) => {
        const existingUser = await UserModel.findOne({ googleId: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        const user: User = {
          googleId: profile.id,
          authType: "google"
        };

        // Noch kein User mit dieser ID, es wird ein neuer User angelegt.
        const newUser = await new UserModel(user).save();
        done(null, newUser);
      }
    )
  );
};
