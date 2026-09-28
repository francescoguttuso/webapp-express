import mysql from "mysql2/promise";
import { env } from "./env.js";

export const connection = await mysql.createConnection({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
});

console.log("Connected to MySQL!");
