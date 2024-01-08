import { AppDataSource } from "../data-source";
import  { EntityTarget } from "typeorm";
import { Config } from "../config";
import {User} from "../entity/User";
import {Tasks} from "../entity/Tasks";
import {app} from "../constants";

export const getRelationsFinder = async (entityName: EntityTarget<any>): Promise<any> => await AppDataSource.getRepository(entityName).find({relations: { ...Config.entities.user.relations }});

/**
 * Runner app.use
 */
export const runnerApp = () => {
    app.get('/', async (_req, res) => {
        const users: User[] = await getRelationsFinder(User);
        // console.log(users.task);
        users.map((user: User) => user.tasks.map((task: Tasks) => console.log(task)));
        res.send('Hello World!');
    });
}