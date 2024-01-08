import express from 'express';
import { AppDataSource } from './data-source';
import { User } from "./entity/User";
import { getRelationsFinder } from "./utils";
import {Tasks} from "./entity/Tasks";
const app = express();
const port = 3000;

AppDataSource.initialize()
    .then(() => {
        app.get('/', async (_req, res) => {
            const users: User[] = await getRelationsFinder(User);
            // console.log(users.task);
            users.map((user: User) => user.tasks.map((task: Tasks) => console.log(task)));
            res.send('Hello World!');
        });
    })
    .catch((error) => console.log(error))

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});