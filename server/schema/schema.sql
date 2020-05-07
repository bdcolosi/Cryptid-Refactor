CREATE DATABASE userinformation 

CREATE TABLE users (
  id serial PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(50),
  email VARCHAR(255),
  email_verified BOOLEAN
);

