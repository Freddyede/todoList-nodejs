import { User } from "../entity/User";
import { getRelationsFinder } from "../utils";
import { Config } from "../config";

export const index = async (_req: any, res: any): Promise<void> => {
    res.render('home/index', {titre: "Dashboard", users: await getRelationsFinder(User, Config.entities.user.relations), years: new Date().getFullYear().toString()});
}