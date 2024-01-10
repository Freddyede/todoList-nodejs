import { AppDataSource } from './data-source';
import { runnerApp } from "./utils";
import { app } from "./constants";

const port: number = 3000;

AppDataSource.initialize()
    .then(() => {
        runnerApp();
    })
    .catch((error: any) => console.log(error))

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});