

-- DROP USER articles_and_products_user;


-- CREATE USER articles_and_products_user;

-- CREATE DATABASE articles_and_products_db OWNER articles_and_products_user;

\c articles_and_products_db

DROP TABLE articles;
DROP TABLE products;

CREATE TABLE articles (
  id serial PRIMARY KEY,
  title varchar(90) NOT NULL UNIQUE,
  body varchar(255) NULL,
  author varchar (90) NOT NULL,
  urlTitle varchar(255) NOT NULL,
  image varchar(255)
);

CREATE INDEX titles ON articles(title);

CREATE TABLE products (
  id serial PRIMARY KEY,
  name varchar(90) NOT NULL UNIQUE,
  price money NOT NULL,
  inventory int NOT NULL
);
