import { AppDataSource } from "../data-source";
import  { EntityTarget } from "typeorm";
import { Config } from "../config";

export const getRelationsFinder = async (entityName: EntityTarget<any>): Promise<any> => await AppDataSource.getRepository(entityName).find({relations: { ...Config.entities.user.relations }});