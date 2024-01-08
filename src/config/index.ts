import {Migration21704711492529} from "../migrations/1704711492529-migration_2";
import {Migration11704708487213} from "../migrations/1704708487213-migration_1";
import {Tasks} from "../entity/Tasks";
import {User} from "../entity/User";
import {DataSource} from "typeorm";

export const Config: any = {
    app: {
        engine: {
            views: "pug"
        }
    },
    database: {dataSource: new DataSource({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "root",
            database: "todolistNodeJs_dev",
            synchronize: false,
            logging: false,
            entities: [
                "{dist, src}/entity/*.{js, ts}"
            ],
            migrations: ["{dist, src}/migration/*.{ts, js}"],
            subscribers: [],
        })},
    entities: {
        user: {
            relations: {
                tasks: true
            }
        }
    }
}