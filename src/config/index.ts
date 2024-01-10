import { DataSource } from "typeorm";
import {Mig91704807514675} from "../migrations/1704807514675-mig_9";

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
            migrations: [Mig91704807514675],
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