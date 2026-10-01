import { connection } from "../db.js";

export const index = async (req, res) => {
  const [result] = await connection.query(`SELECT * FROM games`);

  res.json(result);
};

export const show = async (req, res) => {
  const id = req.params.id;

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

  const game = {
    id: results[0].id,
    title: results[0].title,
    genre: results[0].genre,
    console: results[0].console,
    image: results[0].image,
    description: results[0].description,
    release_year: results[0].release_year,
    reviews: reviews,
  };

  res.json(game);
};
