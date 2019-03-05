import { Application, Request, Response } from 'express';
import { ClanModel } from './clanTypes';

export const clanRoutes: (app: Application) => void = (app: Application) => {
  app.get('/api/clans', (req: Request, res: Response) => {
    const clans: ClanModel[] = [
      {
        name: 'dummy 1',
        id: '1'
      },
      {
        name: 'dummy 2',
        id: '2'
      }
    ];
    res.send({ clans });
  });
};
