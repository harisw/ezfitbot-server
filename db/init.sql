CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `tele_user_id` varchar(255),
  `username` varchar(255),
  `body_goal` int,
  `daily_calorie` float,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `body_records` (
  `id` integer PRIMARY KEY,
  `user_id` integer,
  `height` float,
  `height_unit` varchar(255),
  `weight` float,
  `weight_unit` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `calorie_records` (
  `id` integer PRIMARY KEY,
  `user_id` integer,
  `name` varchar(255),
  `calorie` float,
  `created_at` timestamp
);

CREATE TABLE `daily_logs` (
  `id` integer PRIMARY KEY,
  `user_id` integer,
  `total_calorie` float,
  `status` integer,
  `created_at` timestamp
);

ALTER TABLE `body_records` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `calorie_records` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `daily_logs` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
