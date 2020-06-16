DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgers_name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false NOT NULL,
	PRIMARY KEY (id)
);

