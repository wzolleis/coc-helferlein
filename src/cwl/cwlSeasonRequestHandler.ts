import { model } from 'mongoose';
import { CWL_SEASON_SCHEMA, CwlSeasonModel } from '../db/databaseSchemes';
import { CWL } from '../db/Database';
import { CwlSeasonGetResponse, CwlSeasonStats } from './cwl';


const findBySeasonAndClan = (season: string, clanTag: string): Promise<CwlSeasonModel>  => {
    const query = {
        season,
        clan: {
            tag: clanTag
        }
    };
    const dbModel = model<CwlSeasonModel>(CWL, CWL_SEASON_SCHEMA, CWL);
    // @ts-ignore
    return dbModel.findOne(query).orFail();
};


export const readSeasonData = async (season: string, clanTag: string): Promise<CwlSeasonGetResponse> => {
    try {
        const seasonData: CwlSeasonModel = await findBySeasonAndClan(season, clanTag);
            const stats: CwlSeasonStats = {
                clanStats: []
            };

            return {
                season: seasonData,
                stats
            }
        }
        catch (error) {
            return Promise.reject(error);
        }

};