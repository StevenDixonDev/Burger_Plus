CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id INT auto_increment NOT null,
  burger_name VARCHAR(32),
  devoured BOOLEAN,
  PRIMARY KEY(id);
)