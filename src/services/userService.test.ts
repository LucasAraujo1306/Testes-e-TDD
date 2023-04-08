import { User, UserInstance } from '../models/User'
import * as userService from './userService';

describe('Testing user service', () => {

    let email = 'teste@jest.com';
    let password = '123456';

    beforeAll(async () => {
        await User.sync({ force: true });
    })

    it('should create a new user', async () => {
        const newUser = await userService.createUser(email, password) as UserInstance;
        expect(newUser).not.toBeInstanceOf(Error);
        expect(newUser).toHaveProperty('id');
        expect(newUser.email).toBe(email);
    });

    it('should not create a new user with the same email', async () => {
        const newUser = await userService.createUser(email, password);
        expect(newUser).toBeInstanceOf(Error);
    })

    it('should find a user by email', async () => {
        const user = await userService.findByEmail(email) as UserInstance;
        expect(user.email).toBe(email);
    })

    it('should match the password from database', async () => {
        const user = await userService.findByEmail(email) as UserInstance;
        const match = await userService.mathPassword(password, user.password);
        expect(match).toBeTruthy();
    })

    it('should not match the password from database', async () => {
        const user = await userService.findByEmail(email) as UserInstance;
        const match = await userService.mathPassword('senhaerrada', user.password);
        expect(match).toBeFalsy();
    })

    it('should return all users', async () => {
        const users = await userService.all();
        expect(users.length).toBeGreaterThanOrEqual(1);
        for (let i in users) {
            expect(users[i]).toBeInstanceOf(User);
        }
    })



});