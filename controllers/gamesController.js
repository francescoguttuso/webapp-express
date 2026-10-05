import { connection } from "../db.js";

export const index = async (req, res) => {
  const [result] = await connection.query(`SELECT * FROM games`);

  res.json(result);
};

export const show = async (req, res) => {
  const id = req.params.id;

  export const storeReview = async (req, res) => {
  const gameId = req.params.id;
  const { text, rating } = req.body;

  const [results] = await connection.query(
    `
    SELECT
      games.*,
      reviews.*
    FROM games
    JOIN reviews
      ON games.id = reviews.game_id
    WHERE games.id = ?
  `,
    [id],
  );

  const reviews = results.map((result) => ({
    id: result.id,
    text: result.text,
    rating: result.rating,
  }));

  const [averageResult] = await connection.query(
    `
  SELECT AVG(rating) AS average_rating
  FROM reviews
  WHERE game_id = ?
  `,
    [id],
  );

  const game = {
    id: results[0].id,
    title: results[0].title,
    genre: results[0].genre,
    console: results[0].console,
    image: results[0].image,
    description: results[0].description,
    release_year: results[0].release_year,
    average_rating: averageResult[0].average_rating,
    reviews: reviews,
  };

  res.json(game);
};
