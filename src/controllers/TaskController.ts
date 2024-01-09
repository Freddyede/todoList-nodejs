import { AppDataSource } from "../data-source";
import { Tasks } from "../entity/Tasks";

export const index = async (_req: any, res: any): Promise<any> => res.status(200).json({data: await AppDataSource.getRepository(Tasks).find(), status: res.statusCode});