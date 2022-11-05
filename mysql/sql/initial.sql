DROP TABLE IF EXISTS `situation`;
CREATE TABLE `situation` (
  `id` bigint NOT NULL auto_increment,
  `name` varchar(255) NOT NULL default '',
  `description` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `situation` (`id`, `name`, `description`, `created_at`, `updated_at`, `deleted_at`, `is_deleted`) VALUES
(1, 'Fast Technology Adoption', 'Global fast adoption of tech ...', '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL),
(2, 'Climate Change', 'Climate change due to ....', '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL),
(3, 'Economic Change', 'Economic down trending ...', '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL);

DROP TABLE IF EXISTS `situation_statistic`;
CREATE TABLE `situation_statistic` (
  `id` bigint NOT NULL auto_increment,
  `sid` bigint NOT NULL,
  `job_id` varchar(255) NOT NULL,
  `headcount_year_1` DOUBLE NOT NULL,
  `headcount_year_2` DOUBLE NOT NULL,
  `headcount_year_3` DOUBLE NOT NULL,
  `headcount_year_4` DOUBLE NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY  (`id`),
  KEY `sid` (`sid`),
  CONSTRAINT `situation_statistic_ibfk_1` FOREIGN KEY (`sid`) REFERENCES `situation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `situation_statistic` (`id`, `sid`, `job_id`, `headcount_year_1`, `headcount_year_2`, `headcount_year_3`, `headcount_year_4`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Accountant', 101, 200, 300, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL),
(2, 1, 'Accountant', 100, 201, 300, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL),
(3, 1, 'Manager', 100, 200, 301, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL),
(4, 2, 'Accountant', 100, 200, 300, 401, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL),
(5, 2, 'Clerk', 100, 200, 300, 404, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL),
(6, 2, 'Manager', 100, 200, 303, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL),
(7, 3, 'Accountant', 100, 202, 300, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL),
(8, 3, 'Clerk', 101, 200, 300, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL),
(9, 3, 'Manager', 110, 200, 300, 400, '2022-11-01 00:00:00', '2022-11-01 00:00:00', NULL);

create or replace view situation_list_view as
select
    s.id as id,
    `name`,
    SUM(ss.headcount_year_1) as headcount_year_1,
    SUM(ss.headcount_year_2) as headcount_year_2,
    SUM(ss.headcount_year_3) as headcount_year_3,
    SUM(ss.headcount_year_4) as headcount_year_4
    
from situation s
left join situation_statistic as ss on ss.sid = s.id
group by s.id;