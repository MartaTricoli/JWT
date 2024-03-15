import * as dotenv from "dotenv"
dotenv.config();
import passport from "passport";
import passportJWT from "passport-jwt";
import { db } from "./db";

const {SECRET} = process.env;

passport.use(
    new passportJWT.Strategy({
        secretOrKey: SECRET || "defaultSecret",
        jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    }, async (payload, done) => {
        const user = db.one()
    })
)