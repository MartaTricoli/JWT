import pgPromise from "pg-promise";

const db = pgPromise()("postgress://postgres:postgres@localhost:5432/postgres");

const setUpDb = async () => {
    await db.none(`
        DROP TABLE IF EXISTS planets;

        CREATE TABLE planets (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            image TEXT
        );

        DROP TABLE IF EXIST users;

        CREATE TABLE users (
            id SERIAL NOT NULL PRIMARY KEY,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            token TEXT
        )
    `)

    await db.none(`INSERT INTO planets (name) VALUE ('Earth')`);
    await db.none(`INSERT INTO planets (name) VALUE ('Mars')`);   
    await db.none(`INSERT INTO users (username, password) VALUE ('dummy', 'dummy')`);   
}
setUpDb();

export { db };