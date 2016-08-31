CREATE TABLE users (
    user_id bigint NOT NULL PRIMARY KEY,
    username text NOT NULL UNIQUE,
    email text NOT NULL UNIQUE,
    password text NOT NULL
);