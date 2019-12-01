import { Document, Schema } from 'mongoose';
import { User } from '../user/UserTypes';
import { CwlSeason } from '../cwl/cwl';

export interface UserModel extends User, Document {

}

export interface CwlSeasonModel extends CwlSeason, Document {

}

export const CWL_SEASON_SCHEMA: Schema<CwlSeasonModel> = new Schema<CwlSeasonModel>({
    state: String,
    season: String,
    clans: [
        {
            tag: String,
            name: String,
            badgeUrls: {
                small: String,
                large: String,
                medium: String
            },
            members: [{
                tag: String,
                name: String,
                townHallLevel: Number
            }]
        }],
    rounds: [{
        wartags: [String]
    }]
});

export const USER_SCHEMA: Schema = new Schema({
    googleId: String,
    localId: String,
    authType: String
});

