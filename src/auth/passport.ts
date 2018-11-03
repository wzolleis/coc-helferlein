import passport from 'passport'
import keys from '../config/keys'
const GoogleStrategy: any = require('passport-google-oauth20').Strategy;

export const initializePassport: () => void  = () => {
    passport.use(
        // 'http://localhost:5000/auth/google/callback'
        new GoogleStrategy(
            {
                clientID: keys.googleClientID,
                clientSecret: keys.googleClientSecret,
                callbackURL: '/auth/google/callback'
            },
            (accessToken: string, refreshToken: string, profile: any, done: any) => {
                console.log('accessToken: ', accessToken);
                console.log('refreshToken: ', refreshToken);
                console.log('profile:', profile);
            }
        )
    );
}