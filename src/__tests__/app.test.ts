import supertest from "supertest"; // noinspection TsLint
import app from "../app";

it("should return some greeting!", (done: any) => {
  supertest(app)
    .get("/")
    .expect(200, { hi: "there" })
    .end((err: any) => {
      if (err) {
        return done(err);
      }
      done();
    });
});