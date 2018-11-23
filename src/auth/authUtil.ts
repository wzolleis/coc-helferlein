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
        clientID: appConfig.googleClientID,
        clientSecret: appConfig.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
      },
      (accessToken: string, refreshToken: string, profile: GoogleProfile, done: any) => {
        UserModel.findOne({ googleId: profile.id })
          .then((existingUser: UserModel | null) => {
            if (existingUser) {
              done(null, existingUser);
            }
            else {
              const user: User = {
                googleId: profile.id,
                authType: "google"
              };
              new UserModel(user).save()
                .then((newUser: UserModel) => {
                  done(null, newUser);
                })
                .catch((reason) => {
                  console.log("reason", reason);
                });
            }
          })
          .catch((reason) => {
            console.log("reason 2", reason);
          });
      }
    )
  );
};
