const { SERVE_PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } =
  process.env;

const servePort = Number(SERVE_PORT);
const dbPort = Number(DB_PORT);

export const env = {
  SERVE_PORT: servePort,
  DB_HOST,
  DB_PORT: dbPort,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
};
