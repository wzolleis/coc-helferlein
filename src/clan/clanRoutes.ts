import { Application, Request, Response } from 'express';
import * as cocApiClient from '../coc_api/clans/cocClient';
import { Clan } from './clanTypes';

export const clanRoutes: (app: Application) => void = (app: Application) => {
  app.get('/api/clans', async (req: Request, res: Response) => {
    const clans: Clan[] = [];

    try {
      const clan: Clan = await cocApiClient.clanByTag('#P282PYC');
      clans.push(clan);
    } catch (error) {
      console.error(error);
    }

    res.send({ clans });
  });
};
