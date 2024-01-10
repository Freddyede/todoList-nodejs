import express from "express";
import { Config } from "../config";
import bodyParser from "body-parser";
import {User} from "../entity/User";
import cors from "cors";

export const app = express();

app.set("view engine", Config.app.engine.views)
    .use(bodyParser.urlencoded({extended: false}))
    .use(cors({
        origin: '*'
    }))
    .use(bodyParser.json());

export const user: User = new User();