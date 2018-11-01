"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
it('should return some greeting!', (done) => {
    supertest_1.default(app_1.default)
        .get('/')
        .expect(200, { hi: "there" })
        .end((err) => {
        if (err) {
            return done(err);
        }
        done();
    });
});
