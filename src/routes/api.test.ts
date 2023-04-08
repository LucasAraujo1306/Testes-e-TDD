import request from 'supertest';
import app from '../app';

describe('Testing api rountes', () => {
    it('should return pong', (done) => {
        request(app)
            .get('/ping')
            .then(res => {
                expect(res.body).toEqual({ pong: true });
                return done();
            });
    })
})