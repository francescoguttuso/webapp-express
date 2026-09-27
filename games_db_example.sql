-- seed.sql
-- Dati di esempio per il database games_db
-- 5 giochi e 5 recensioni
CREATE DATABASE games_db;
USE games_db;
CREATE TABLE `games` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `genre` VARCHAR(255) NOT NULL,
    `console` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `release_year` INT NOT NULL
);
CREATE TABLE `reviews`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `text` TEXT NOT NULL,
    `rating` INT NOT NULL,
    `game_id` INT NOT NULL
);
ALTER TABLE
    `reviews` ADD CONSTRAINT `reviews_game_id_foreign` FOREIGN KEY(`game_id`) REFERENCES `games`(`id`);
    
  show table;
  DESCRIBE games;
  DESCRIBE reviews;
  SHOW TABLES;
INSERT INTO games
(title, genre, console, image, description, release_year)
VALUES
('Grand Theft Auto V', 'Action', 'PlayStation 5', 'gta5.jpg',
 'Un gioco open world ambientato a Los Santos.', 2013),
('Resident Evil 4', 'Survival Horror', 'PlayStation 5', 'resident-evil-4.jpg',
 'Un survival horror ricco di azione ambientato in un villaggio misterioso.', 2023),
('Red Dead Redemption 2', 'Action', 'PlayStation 4', 'rdr2.jpg',
 'Un western open world ambientato nel selvaggio West.', 2018),
('The Witcher 3', 'RPG', 'Xbox Series X', 'witcher3.jpg',
 'Un gioco di ruolo open world ambientato in un mondo fantasy.', 2015),
('Elden Ring', 'RPG', 'PlayStation 5', 'elden-ring.jpg',
 'Un action RPG open world ambientato nelle Terre Intermedie.', 2022);

INSERT INTO reviews
(text, rating, game_id)
VALUES
('Un open world enorme e ancora molto divertente.', 9, 1),
('Un ottimo remake con combattimenti molto coinvolgenti.', 9, 2),
('Un mondo incredibilmente curato e una storia fantastica.', 10, 3),
('Uno degli RPG piu completi che abbia mai giocato.', 10, 4),
('Un mondo enorme che premia continuamente lesplorazione.', 10, 5);
