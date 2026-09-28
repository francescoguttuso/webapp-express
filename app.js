import express from "express";
import { env } from "./env.js";
import { gamesRouter } from "./resources/games.js";

const app = express();
const port = env.SERVE_PORT;

app.use(express.static("public"));

app.use("/games", gamesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
