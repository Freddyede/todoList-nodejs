import { AppDataSource } from "../data-source";
import  { EntityTarget } from "typeorm";
import { app } from "../constants";
import HomeRoads from "../routes/HomeRoads";

export const getRelationsFinder = async (entityName: EntityTarget<any>, relations: any): Promise<any> => await AppDataSource.getRepository(entityName).find({relations: { ...relations }});

/**
 * Runner app.use
 */
export const runnerApp = () => {
    app.use(HomeRoads);
}