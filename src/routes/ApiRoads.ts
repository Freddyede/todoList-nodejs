import express from "express";
import TasksRoads from "./TasksRoads";

const ApiRoads = express.Router();

ApiRoads.use("/tasks", TasksRoads); // All roads of tasks (readAll, read, create, update, delete) (get, get, post, put/patch, delete)
export default ApiRoads;