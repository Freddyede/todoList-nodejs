import express from "express";
import { Config } from "../config";

export const app = express();

app.set("view engine", Config.app.engine.views);