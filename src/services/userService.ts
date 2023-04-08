import bcrypt from "bcrypt";
import { User } from "../models/User";


export const createUser = async (email: string, password: string) => {
    const hasUser = await User.findOne({ where: { email } });
    if (!hasUser) {
        const hash = await bcrypt.hash(password, 10);

        const newUser = await User.create({ email, password: hash });
        return newUser;
    } else {
        return new Error('E-mail já existe.');
    }
}

export const findByEmail = async (email: string) => {
    return await User.findOne({ where: { email } });
}

export const mathPassword = async (passwordText: string, encrypted: string) => {
    return await bcrypt.compare(passwordText, encrypted);
}

export const all = async () => {
    return await User.findAll();
}
