import express from "express";
import { connectDB } from "./db.js";
import { env } from "./env.js";

const connection = await connectDB();

const app = express();
const port = env.SERVE_PORT;

app.use(express.static("public"));

app.get("/games", async (req, res) => {
  const [result] = await connection.query(`SELECT * FROM games`);

  res.json(result);
});

app.get("/games/:id", async (req, res) => {
  const id = req.params.id;
  const [[result]] = await connection.query(`SELECT * FROM games WHERE ID=?`, [
    id,
  ]);
  res.json(result);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
