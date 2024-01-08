import { DataSource } from "typeorm";
import { User } from "./entity/User";
import {Migration11704708487213} from "./migrations/1704708487213-migration_1";
import { Tasks } from "./entity/Tasks";
import { Migration21704711492529 } from "./migrations/1704711492529-migration_2";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "todolistNodeJs_dev",
    synchronize: false,
    logging: false,
    entities: [User, Tasks],
    migrations: [Migration11704708487213, Migration21704711492529],
    subscribers: [],
})