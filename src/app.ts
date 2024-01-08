import { AppDataSource } from './data-source';
import { runnerApp } from "./utils";
import { app } from "./constants";

const port = 3000;

AppDataSource.initialize()
    .then(() => {
        runnerApp();
    })
    .catch((error) => console.log(error))

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});