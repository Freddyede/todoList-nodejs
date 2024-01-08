import { DataSource } from "typeorm";
import { User } from "./entity/User";
import {Migration11704708487213} from "./migrations/1704708487213-migration_1";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "todolistNodeJs_dev",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [Migration11704708487213],
    subscribers: [],
})