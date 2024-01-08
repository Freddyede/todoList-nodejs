import express from "express";
import {index} from "../controllers/HomeController";

const HomeRoads = express.Router();

HomeRoads.get('/', index);

export default HomeRoads;