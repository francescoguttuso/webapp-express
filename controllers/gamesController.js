import { connection } from "../db.js";

export const index = async (req, res) => {
  const [result] = await connection.query(`SELECT * FROM games`);

  res.json(result);
};
