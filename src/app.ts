import express from 'express';
import { AppDataSource } from './data-source';
import {User} from "./entity/User";
const app = express();
const port = 3000;

AppDataSource.initialize()
    .then(() => {
        app.get('/', async (req, res) => {
            const users: User[] = await AppDataSource.manager.find(User);
            console.log(users);
            res.send('Hello World!');
        });
    })
    .catch((error) => console.log(error))

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});