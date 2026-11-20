-- plushopp_db: kész adatbázis (MySQL / MariaDB)
-- Importálás: mysql -u root < plushopp_db.sql

CREATE DATABASE IF NOT EXISTS `plushopp_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `plushopp_db`;

DROP TABLE IF EXISTS `pluss`;
DROP TABLE IF EXISTS `pluss_tipus`;

CREATE TABLE `pluss_tipus` (
  `id`    BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tipus` VARCHAR(255)    NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `pluss` (
  `id`             BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nev`            VARCHAR(255)    NOT NULL,
  `szuletesidatum` DATE            NOT NULL,
  `pluss_tipus_id` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pluss_pluss_tipus_id_foreign` (`pluss_tipus_id`),
  CONSTRAINT `pluss_pluss_tipus_id_foreign` FOREIGN KEY (`pluss_tipus_id`) REFERENCES `pluss_tipus` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `pluss_tipus` (`id`, `tipus`) VALUES
(1, 'Mackó'),
(2, 'Nyuszi'),
(3, 'Kutya'),
(4, 'Unikornis');

INSERT INTO `pluss` (`id`, `nev`, `szuletesidatum`, `pluss_tipus_id`) VALUES
(1, 'Barna Berci', '2022-03-14', 1),
(2, 'Mézes Mackó', '2023-11-02', 1),
(3, 'Hópihe',      '2021-12-24', 2),
(4, 'Cuki Füles',  '2024-04-05', 2),
(5, 'Bodri',       '2020-06-20', 3),
(6, 'Szivárvány',  '2025-01-15', 4);
