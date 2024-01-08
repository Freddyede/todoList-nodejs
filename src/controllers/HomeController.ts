import { User } from "../entity/User";
import { Tasks } from "../entity/Tasks";
import { getRelationsFinder } from "../utils";

export const index = async (_req: any, res: any) => {
    res.render('home/index', {titre: "Dashboard", users: await getRelationsFinder(User)});
}