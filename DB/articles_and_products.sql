DROP DATABASE articles_and_products_db;

DROP USER articles_and_products_user;


CREATE USER articles_and_products_user;

CREATE DATABASE articles_and_products_db OWNER articles_and_products_user;

\c articles_and_products_db


CREATE TABLE articles (
  id serial PRIMARY KEY,
  title varchar(90) NOT NULL,
  body varchar(255) NULL,
  author varchar (90) NOT NULL,
  urlTitle varchar(255) NOT NULL
);

CREATE INDEX titles ON articles(title);

CREATE TABLE products (
  id serial PRIMARY KEY,
  name varchar(90) NOT NULL,
  price money NOT NULL,
  inventory int NOT NULL
);
