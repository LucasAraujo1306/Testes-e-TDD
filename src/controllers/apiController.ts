import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true });
}

export const register = async (req: Request, res: Response) => {
    if (req.body.email && req.body.password) {
        let { email, password } = req.body;
        const newUser = await userService.createUser(email, password)

        if (newUser instanceof Error) {
            res.json({ error: newUser.message });
        } else {
            res.status(201).json({ id: newUser.id });
        }
    }
}

export const login = async (req: Request, res: Response) => {
    if (req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

        const user = await userService.findByEmail(email);
        if (user) {
            const match = await userService.mathPassword(password, user.password);
            if (match) {
                res.json({ status: true });
                return
            }
        }
    }
    res.json({ status: false });
}

export const list = async (req: Request, res: Response) => {
    let users = await userService.all()
    let list: string[] = [];
    for (let i in users) {
        list.push(users[i].email);
    }
    res.json({ list });
}