CREATE DATABASE menuservice;
\connect menuservice;

DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS wines;
DROP TABLE IF EXISTS pairings;

CREATE TABLE recipes (
  id INT PRIMARY KEY NOT NULL,
  name VARCHAR(20),
  namesub VARCHAR(20),
  tags VARCHAR(20) [],
  time VARCHAR(20),
  description TEXT,
  servings INT,
  calories INT,
  imgurl TEXT
);

CREATE TABLE wines (
  id INT PRIMARY KEY NOT NULL,
  name VARCHAR(20),
  description TEXT,
  imgurl TEXT
);

CREATE TABLE pairings (
  recipeid INT,
  wineid INT
)
