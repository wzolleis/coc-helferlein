import { Application, Request, Response } from 'express';
import { CWL } from '../db/Database';
import { CWL_SEASON_SCHEMA, CwlSeasonModel } from '../db/databaseSchemes';
import { model } from 'mongoose';


export const cwlRoutes = (app: Application) => {
    app.get('/api/cwl-seasons/:season/:clanTag', async (req: Request, res: Response) => {

        const cwlSeasonModel = model<CwlSeasonModel>(CWL, CWL_SEASON_SCHEMA, CWL);
        const query = {
            season: req.params.season,
            clan: {
                tag: req.params.clanTag
            }
        };
        const result: CwlSeasonModel | null = await cwlSeasonModel.findOne(query);

        res.send(result);
    });
};



