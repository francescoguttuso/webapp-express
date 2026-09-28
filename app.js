import express from "express";
import { env } from "./env.js";
import { gamesRouter } from "./resources/games.js";

const app = express();
const port = env.SERVE_PORT;

app.use(express.static("public"));

app.use("/games", gamesRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "unexpected internal server error" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
