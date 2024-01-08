import { AppDataSource } from "../data-source";
import { EntityTarget } from "typeorm";

export const getRepo = (entityName: EntityTarget<any>) => AppDataSource.getRepository(entityName);