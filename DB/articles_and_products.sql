DROP DATABASE articles_and_products_db;

DROP USER articles_and_products_user;


CREATE USER articles_and_products_user;

CREATE DATABASE articles_and_products_db OWNER articles_and_products_user;

\c articles_and_products_db

CREATE TABLE articles (
  id serial PRIMARY KEY,
  title varchar(90) NOT NULL,
  body text NOT NULL,
  author varchar (90) NOT NULL,
  urlTitle varchar(255) NOT NULL
);

CREATE TABLE products (
  id serial PRIMARY KEY,
  name varchar(90) NOT NULL,
  price float(2) NOT NULL,
  inventory int NOT NULL
);
