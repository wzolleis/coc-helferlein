import { Application, Request, Response } from 'express';
import { players } from './players';

export const teamRoutes: (app: Application) => void = (app: Application) => {
  app.get('/api/players', (req: Request, res: Response) => {
    res.send({ players });
  });
};
