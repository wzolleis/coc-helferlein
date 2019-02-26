import passport from "passport";
import express from "express";

export const authRoutes: (app: express.Application) => void = (app: express.Application) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (_: express.Request, res: express.Response) => {
      res.redirect("/dashboard");
    }
  );

  app.get("/api/current_user", (req: express.Request, res: express.Response) => {
    res.send({ user: req.user });
  });

  app.get("/api/logout", (req: express.Request, res: express.Response) => {
    req.logout();
    res.send({ user: req.user });
  });
};
