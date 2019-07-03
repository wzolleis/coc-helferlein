import passport from 'passport';
import { Application, Request, Response } from 'express';

export const authRoutes: (app: Application) => void = (app: Application) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (_: Request, res: Response) => {
      res.redirect('/dashboard');
    }
  );

  app.get('/api/current_user', (req: Request, res: Response) => {
    res.send({ user: req.user });
  });

  app.get('/api/logout', (req: Request, res: Response) => {
    req.logout();
    res.redirect('/');
  });

  app.post('/api/login', (req: Request, res: Response) => {
    const user = req.body.user;
    req.logIn(user, () => {
    });
    res.send({ user });
  });

};
