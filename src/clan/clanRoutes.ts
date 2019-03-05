import { Application, Request, Response } from 'express';
import { ClanModel } from './clanTypes';
import { cocApiClient } from '../coc_api/clans/cocClient';

export const clanRoutes: (app: Application) => void = (app: Application) => {
  app.get('/api/clans', async (req: Request, res: Response) => {
    const clans: ClanModel[] = [
      {
        name: 'dummy 1',
        id: '1'
      }
    ];

    try {
      const response = await cocApiClient().clanByTag('#P282PYC');
      clans.push({
        name: response.name,
        id: response.tag
      });
    } catch (error) {
      console.error(error);
    }

    res.send({ clans });
  });
};
