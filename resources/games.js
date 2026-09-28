import express from "express";
import { index, show } from "../controllers/gamesController.js";

export const gamesRouter = express.Router();

gamesRouter.get("/", index);
gamesRouter.get("/:id", show);
