import { Application, Request, Response } from 'express';
import { Database } from '../db/Database';
import { CwlSeasonModel } from '../db/databaseSchemes';
import { Clan, ClanMember } from './cwl';


export const cwlRoutes = (app: Application) => {
    app.get('/api/cwl-seasons', async (req: Request, res: Response) => {

        const result: CwlSeasonModel[] = await Database.cwlSeasonModel.find({});

        result.forEach((model: CwlSeasonModel) => {
            model.clans.forEach((clan: Clan) => {
                const townhall12Members: ClanMember[] = clan.members.filter((member: ClanMember) => {
                    return member.townHallLevel >= 12
                });
                console.log(`clan ${clan.name}: ${townhall12Members.length}`)
            })
        });

        res.send(result);
    });
};



