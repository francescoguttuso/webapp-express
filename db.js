import mysql from "mysql2/promise";

export const connectDB = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "games_db",
  });

  console.log("Connected to MySQL!");

  return connection;
};
