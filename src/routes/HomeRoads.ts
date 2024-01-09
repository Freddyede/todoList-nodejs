import express from "express";
import {createViews, index, saveUser} from "../controllers/HomeController";

const HomeRoads = express.Router();

HomeRoads.get('/', index)
    .get('/create', createViews)
    .post('/create', saveUser);

export default HomeRoads;