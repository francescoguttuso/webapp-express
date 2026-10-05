import { connection } from "../db.js";

export const index = async (req, res) => {
  const [result] = await connection.query(`SELECT * FROM games`);

  res.json(result);
};

export const show = async (req, res) => {
  const id = req.params.id;

  const [games] = await connection.query(
    `
    SELECT *
    FROM games
    WHERE id = ?
    `,
    [id],
  );

  const [reviews] = await connection.query(
    `
    SELECT id, text, rating
    FROM reviews
    WHERE game_id = ?
    `,
    [id],
  );

  const [averageResult] = await connection.query(
    `
    SELECT AVG(rating) AS average_rating
    FROM reviews
    WHERE game_id = ?
    `,
    [id],
  );

  const game = {
    id: games[0].id,
    title: games[0].title,
    genre: games[0].genre,
    console: games[0].console,
    image: games[0].image,
    description: games[0].description,
    release_year: games[0].release_year,
    average_rating: averageResult[0].average_rating,
    reviews: reviews,
  };

  res.json(game);
};

export const storeReview = async (req, res) => {
  const gameId = req.params.id;
  const { text, rating } = req.body;

  const [result] = await connection.query(
    `
    INSERT INTO reviews
    (text, rating, game_id)
    VALUES (?, ?, ?)
    `,
    [text, rating, gameId],
  );

  res.status(201).json({
    message: "Review created successfully",
  });
};
