import pgPromise from "pg-promise";

const db = pgPromise()("postgress://postgres:postgres@localhost:5432/postgres");

const setUpDb = async () => {
  await db.none(`
    SELECT *
    FROM titanic
    WHERE Sex = "female"
        AND Survived = 1
            AND Age > 30;

    SELECT AVG(Age)
    FROM titanic
    WHERE Sex = "male"
        AND Survived = 0;
    
    SELECT *
    FROM titanic
    WHERE Fare > 20
        AND Fare < 50
            AND Port = "C";
    
    SELECT COUNT(*)
    FROM titanic
    WHERE Survived = 1
        And Pclass = 1;
    
    SELECT *
    from titanic
    WHERE Port = "C"
        AND Fare > 75;
  `)  
}
setUpDb();

export { db };