import passport from "passport";

export const authRoutes: (app: any) => void = (app: any) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google")
  );

  app.get("/api/current_user", (req: any, res: any) => {
    res.send({ user: req.user });
  });

  app.get("/api/logout", (req: any, res: any) => {
    req.logout();
    res.send({ user: req.user });
  });
};
