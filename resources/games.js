import express from "express";
import { index, show, storeReview } from "../controllers/gamesController.js";

export const gamesRouter = express.Router();

gamesRouter.get("/", index);
gamesRouter.get("/:id", show);
gamesRouter.post("/:id/reviews", storeReview);
