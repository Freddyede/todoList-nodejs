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