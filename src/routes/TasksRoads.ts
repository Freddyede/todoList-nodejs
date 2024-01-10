import express, { Router } from "express";
import {read, index, save, deleted} from "../controllers/TaskController";

const TasksRoads: Router = express.Router();

TasksRoads.get('/', index)
TasksRoads.get('/:id', read)
TasksRoads.post('/create', save)
TasksRoads.delete('/delete/:id', deleted)

// create 201
// update 301/303
// delete 200
export default TasksRoads;