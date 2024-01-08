import express from 'express';
import { AppDataSource } from './data-source';
import { User } from "./entity/User";
import { getRepo } from "./utils";
const app = express();
const port = 3000;

AppDataSource.initialize()
    .then(() => {
        app.get('/', async (req, res) => {
            const userRepo = getRepo(User);
            const users = await userRepo.find({relations : {task : true}})
            // console.log(users.task);
            users.map(user => console.log(user.task[0].name));
            res.send('Hello World!');
        });
    })
    .catch((error) => console.log(error))

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});