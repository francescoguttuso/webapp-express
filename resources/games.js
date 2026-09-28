import express from "express";
import { index } from "../controllers/gamesController.js";

export const gamesRouter = express.Router();
gamesRouter.get("/", index);
