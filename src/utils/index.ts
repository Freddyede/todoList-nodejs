import { AppDataSource } from "../data-source";
import  { EntityTarget } from "typeorm";
import { app } from "../constants";
import HomeRoads from "../routes/HomeRoads";
import ApiRoads from "../routes/ApiRoads";
import { TasksServices } from "../services/TasksServices";

export const getRelationsFinder = async (entityName: EntityTarget<any>, relations: any): Promise<any> => await AppDataSource.getRepository(entityName).find({relations: { ...relations }});

/**
 * Runner app.use
 */
export const runnerApp = () => {
    app.use("/", HomeRoads)
        .use("/api", ApiRoads);
}

export const jsonResponse = (data: any, req: any, res: any) => (req.method !== "GET" || data.status === 404) ? res.status(data.status).json({message: data.message, status: res.statusCode}) : res.status(data.status).json({data: data.obj, status: res.statusCode});

export let task = async(req: any): Promise<any> => await TasksServices.getOne(parseInt(req.body.tasks));