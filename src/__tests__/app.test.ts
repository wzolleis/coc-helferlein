import request from 'supertest';
import app from '../app';

it('should return some greeting!', (done: any) => {
    request(app)
        .get('/')
        .expect(200, {hi: "there"})
        .end((err: any) => {
            if (err) {
                return done(err);
            }
            done();
        });
});