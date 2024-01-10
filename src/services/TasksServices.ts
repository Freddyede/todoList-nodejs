import { Tasks } from "../entity/Tasks";
import { AppDataSource } from "../data-source";

export class TasksServices
{
    private static ENTITY_TARGET = Tasks;
    static async all(): Promise<any>
    {
        return await AppDataSource.getRepository(this.ENTITY_TARGET).find();
    }
    static async getOne(id: number): Promise<any>
    {
        return await AppDataSource.getRepository(Tasks).find({where: {id: id}})
    }
    static async createOne(object: any)
    {
        let newTask: Tasks = new Tasks();
        // RENSEIGNER CHAMPS de la nouvelle tâche
        newTask.id = parseInt(object.id);
        newTask.name = object.name;
        newTask.description = object.description;
        // save l'objet dans le manager
        AppDataSource.manager.save(newTask);
    }
    static async deleteOne(id: number): Promise<any>
    {
        return await AppDataSource.getRepository(Tasks).remove(await this.getOne(id));
    }
}

