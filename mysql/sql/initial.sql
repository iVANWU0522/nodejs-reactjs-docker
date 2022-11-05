DROP TABLE IF EXISTS `situation`;
CREATE TABLE `situation` (
  `id` bigint NOT NULL auto_increment,
  `name` varchar(255) NOT NULL default '',
  `description` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `situation` (`id`, `name`, `description`, `created_at`, `updated_at`, `deleted_at`, `is_deleted`) VALUES
(1, 'Fast Technology Adoption', 'Global fast adoption of tech ...', '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL, 0),
(2, 'Climate Change', 'Climate change due to ....', '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL, 0),
(3, 'Economic Change', 'Economic down trending ...', '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL, 0);

DROP TABLE IF EXISTS `situation_statistic`;
CREATE TABLE `situation_statistic` (
  `id` bigint NOT NULL auto_increment,
  `sid` bigint default NULL,
  `job_id` varchar NOT NULL,
  `headcount_year_1` double NOT NULL,
  `headcount_year_2` double NOT NULL,
  `headcount_year_3` double NOT NULL,
  `headcount_year_4` double NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL default '0',
  PRIMARY KEY  (`id`),
  KEY `sid` (`sid`),
  CONSTRAINT `situation_statistic_ibfk_1` FOREIGN KEY (`sid`) REFERENCES `situation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `situation_statistic` (`id`, `sid`, `job_id`, `headcount_year_1`, `headcount_year_2`, `headcount_year_3`, `headcount_year_4`, `created_at`, `updated_at`, `deleted_at`, `is_deleted`) VALUES
(1, 1, '1', 101, 200, 300, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL, 0),
(2, 1, '2', 100, 201, 300, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL, 0),
(3, 1, '3', 100, 200, 301, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL, 0),
(4, 2, '1', 100, 200, 300, 401, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL, 0),
(5, 2, '2', 100, 200, 300, 404, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL, 0),
(6, 2, '3', 100, 200, 303, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL, 0),
(7, 3, '1', 100, 202, 300, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL, 0),
(8, 3, '2', 101, 200, 300, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL, 0),
(9, 3, '3', 110, 200, 300, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL, 0);