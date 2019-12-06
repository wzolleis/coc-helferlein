import { Application, Request, Response } from 'express';
import { CWL } from '../db/Database';
import { CWL_SEASON_SCHEMA, CwlSeasonModel } from '../db/databaseSchemes';
import { model } from 'mongoose';


export const cwlRoutes = (app: Application) => {
    app.get('/api/cwl-seasons', async (req: Request, res: Response) => {

        const cwlSeasonModel = model<CwlSeasonModel>(CWL, CWL_SEASON_SCHEMA, CWL);
        const result: CwlSeasonModel[]  = await cwlSeasonModel.find();

        res.send(result);
    });
};



