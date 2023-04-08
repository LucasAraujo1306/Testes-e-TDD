import dotenv from 'dotenv';
dotenv.config();
const { PG_TEST_DB, PG_TEST_USER, PG_TEST_PASSWORD, PG_TEST_PORT } = process.env
const { PG_DB, PG_USER, PG_PASSWORD, PG_PORT } = process.env

let db = {
    db: PG_DB as string,
    user: PG_USER as string,
    password: PG_PASSWORD as string,
    port: PG_PORT as string
}

if (process.env.NODE_ENV === 'test') {
    db = {
        db: PG_TEST_DB as string,
        user: PG_TEST_USER as string,
        password: PG_TEST_PASSWORD as string,
        port: PG_TEST_PORT as string
    }
}

export default db