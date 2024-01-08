import { AppDataSource } from "../data-source";
import  { EntityTarget } from "typeorm";
import { Config } from "../config";
import { app } from "../constants";
import HomeRoads from "../routes/HomeRoads";

export const getRelationsFinder = async (entityName: EntityTarget<any>): Promise<any> => await AppDataSource.getRepository(entityName).find({relations: { ...Config.entities.user.relations }});

/**
 * Runner app.use
 */
export const runnerApp = () => {
    app.use(HomeRoads);
}