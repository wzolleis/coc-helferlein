import { Application, Request, Response } from 'express';
import { readSeasonData } from './cwlSeasonRequestHandler';
import { CwlSeasonGetResponse } from './cwl';




export const cwlRoutes = (app: Application) => {
    app.get('/api/cwl-seasons/:season/:clanTag', async (req: Request, res: Response) => {
        try {
            const result:CwlSeasonGetResponse = await readSeasonData(req.params.season, req.params.clanTag);
            res.send(result);
        }
        catch(error) {
            res.status(500).send(error);
        }
    });

};




