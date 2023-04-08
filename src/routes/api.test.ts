import { User, UserInstance } from '../models/User'
import request from 'supertest';
import app from '../app';

describe('Testing api rountes', () => {

    let email = 'teste@jest.com';
    let password = '123456';

    beforeAll(async () => {
        await User.sync({ force: true });
    })

    it('should return pong', (done) => {
        request(app)
            .get('/ping')
            .then(res => {
                expect(res.body).toEqual({ pong: true });
                return done();
            });
    })

    it('should register a new user', (done) => {
        request(app)
            .post('/register')
            .send(`email=${email}&password=${password}`)
            .then(res => {
                console.log({ teste: res.body });
                expect(res.body.error).toBeUndefined();
                expect(res.body).toHaveProperty('id');
                return done();
            })
    })


})