import { jsonResponse } from "../utils";
import { TasksServices } from "../services/TasksServices";

export const index = async (req: any, res: any): Promise<any> => jsonResponse({obj: await TasksServices.all(), status: 200}, req, res);
export const read = async (req: any, res: any): Promise<any> => (await TasksServices.getOne(parseInt(req.params.id))).length > 0 ? jsonResponse({obj: (await TasksServices.getOne(parseInt(req.params.id)))[0], status: 200}, req, res) : jsonResponse({message: "Not Found", status: 404}, req, res);

export const save = async (req: any, res: any): Promise<any> => {
    await TasksServices.createOne({...req.body});
    return jsonResponse({message: "Created", status: 201}, req, res);

}
export const deleted = async (req: any, res: any): Promise<any> => {
    await TasksServices.deleteOne(parseInt(req.body.id));
    return jsonResponse({ message: "Deleted", status: 200 }, req, res);
};