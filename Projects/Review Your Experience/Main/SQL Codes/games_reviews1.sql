-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 20 mei 2025 om 11:47
-- Serverversie: 10.4.32-MariaDB
-- PHP-versie: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `games_reviews1`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category-name` varchar(255) NOT NULL,
  `logo_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `category`
--

INSERT INTO `category` (`id`, `category-name`, `logo_path`) VALUES
(1, 'Action', 'Logos/Action Logo.png'),
(2, 'Adventure', 'Logos/Adventure Logo.png'),
(3, 'RPG', 'Logos/RPG Logo.png'),
(4, 'Simulator', 'Logos/Simulator Logo.png'),
(5, 'Strategy', 'Logos/Strategy Logo.png'),
(6, 'Survival', 'Logos/Survival Logo.png'),
(7, 'Horror', 'Logos/Horror Logo.png'),
(8, 'FPS', 'Logos/FPS Logo.png');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `game-name` varchar(255) NOT NULL,
  `game-description` varchar(255) NOT NULL,
  `game-price ($)` decimal(7,2) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `games`
--

INSERT INTO `games` (`id`, `game-name`, `game-description`, `game-price ($)`, `category_id`) VALUES
(1, 'Call of Duty: Warzone 2.0', 'Call of Duty: Warzone 2.0 is a free-to-play battle royale game by Activision. Featuring a massive open-world map, it offers intense combat, tactical gameplay, and new mechanics like AI strongholds and proximity chat. Players fight to survive in squads or ', 0.00, 1),
(2, 'Devil May Cry 5', 'Devil May Cry 5 is a fast-paced action game by Capcom. Players control Dante, Nero, and V, each with unique combat styles, to battle demonic forces. Featuring stylish combos, powerful weapons, and a gripping story, it delivers intense hack-and-slash gamep', 29.99, 1),
(3, 'DOOM Eternal', 'Doom Eternal is a fast-paced first-person shooter by id Software. As the Doom Slayer, players battle demons across hellish landscapes using powerful weapons, brutal melee attacks, and agile movement. It features intense combat, epic bosses, and a gripping', 39.99, 1),
(4, 'The Legend of Zelda', 'The Legend of Zelda is a legendary action-adventure game series by Nintendo. Players control Link, a hero on a quest to rescue Princess Zelda and defeat Ganon. Featuring open-world exploration, puzzle-solving, and combat, it’s known for its rich lore and ', 69.99, 2),
(5, 'Uncharted: The Lost Legacy', 'Uncharted: The Lost Legacy is an action-adventure game by Naughty Dog. Players control Chloe Frazer, teamed with Nadine Ross, on a quest for the Tusk of Ganesh in India. Featuring thrilling combat, puzzles, and cinematic storytelling, it offers an immersi', 49.99, 2),
(6, 'The Witcher 3: Wild Hunt', 'The Witcher 3: Wild Hunt is an open-world RPG by CD Projekt Red. Players control Geralt of Rivia, a monster hunter searching for Ciri. Featuring deep storytelling, vast exploration, dynamic combat, and rich choices, it’s praised as one of the best RPGs ev', 39.99, 2),
(7, 'Final Fantasy', 'Final Fantasy is a legendary RPG series by Square Enix. Known for its deep storytelling, strategic combat, and rich worlds, each game features unique characters and settings. Blending fantasy and sci-fi, it’s one of the most influential franchises in gami', 11.99, 3),
(8, 'Elden Ring', 'Elden Ring is an open-world action RPG by FromSoftware and Hidetaka Miyazaki, with lore by George R.R. Martin. Players explore the Lands Between, battling powerful foes with deep combat mechanics, magic, and exploration. It’s praised for its difficulty an', 59.99, 3),
(9, 'The Elder Scrolls V: Skyrim Special Edition', 'The Elder Scrolls V: Skyrim Special Edition is an open-world RPG by Bethesda. It features enhanced graphics, DLCs, and mod support. Players explore Skyrim as the Dragonborn, mastering magic, combat, and dragon shouts while shaping their story through choi', 39.99, 3),
(10, 'SimCity 3000', 'SimCity 3000 is a city-building simulation game by Maxis. Players design and manage a city, balancing zoning, infrastructure, economy, and citizen needs. Featuring improved graphics, deeper simulation mechanics, and disasters, it’s a classic in the genre.', 4.99, 4),
(11, 'The Sims 4', 'The Sims 4 is a life simulation game by Maxis and EA. Players create and control Sims, managing their relationships, careers, and homes. With extensive customization, expansion packs, and an open-ended gameplay style, it offers endless creativity and stor', 0.00, 4),
(12, 'Farming Simulator 22', 'Farming Simulator 22 is a farming simulation game by Giants Software. Players manage a farm, grow crops, raise animals, and use realistic vehicles. Featuring seasons, production chains, and multiplayer, it offers an immersive agricultural experience.', 19.99, 4),
(13, 'StarCraft', 'StarCraft is a real-time strategy game by Blizzard Entertainment. Set in a sci-fi universe, it features three unique factions: Terrans, Zerg, and Protoss. Players gather resources, build armies, and engage in strategic battles, making it a classic in the ', 0.00, 5),
(14, 'Sid Meiers Civilization VI', 'Sid Meiers Civilization VI is a turn-based strategy game by Firaxis Games. Players lead a civilization from ancient times to the modern era, managing cities, diplomacy, warfare, and technology. With deep strategy and varied playstyles, it’s a top-tier 4X ', 69.99, 5),
(15, 'Age of Empires IV', 'Age of Empires IV is a real-time strategy game by Relic Entertainment and Xbox Game Studios. Set in historical eras, players build civilizations, manage economies, and lead armies in epic battles. Featuring deep strategy, diverse factions, and multiplayer', 39.99, 5);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT voor een tabel `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
