import { User } from "../entity/User";
import { getRelationsFinder } from "../utils";
import { Config } from "../config";
import { AppDataSource } from "../data-source";
import { Tasks } from "../entity/Tasks";
import { user } from "../constants"; // method call as newCall; (code use newCall);
import { task as taskFunction} from "../utils";
export const index = async (_req: any, res: any): Promise<void> => res.render('home/index', {titre: "Dashboard", users: await getRelationsFinder(User, Config.entities.user.relations), years: new Date().getFullYear().toString()});

export const createViews = async (_req: any, res: any) => res.render('home/create', {titre: "Create : User", tasks: await AppDataSource.getRepository(Tasks).find()});

export const saveUser = async (req: any, res: any) => {
    let users = await AppDataSource.getRepository(User).find();
    user.id = users.length + 1;
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.password = req.body.pwd;
    let task = await taskFunction(req);
    task.map((task: Tasks) => user.tasks = task);
    await AppDataSource.manager.save(user);
    return res.redirect('/');
}