CREATE TABLE book (
    book_id SERIAL PRIMARY KEY NOT NULL,
    title text NOT NULL UNIQUE,
    genre text NOT NULL
);

CREATE TABLE sysuser (
    sysuser_id SERIAL PRIMARY KEY ,
    username text NOT NULL,
    password text NOT NULL
);

CREATE TABLE author (
    author_id SERIAL PRIMARY KEY NOT NULL,
    author_name text NOT NULL UNIQUE
);


CREATE TABLE book_list (
    book_list_id SERIAL PRIMARY KEY NOT NULL,
    previous_book text,
    current_book text,
    next_book text,
    sysuser_id integer REFERENCES sysuser (sysuser_id)
);

CREATE TABLE book_booklist (
    book_booklist_id SERIAL PRIMARY KEY NOT NULL,
    book_id integer REFERENCES book (book_id),
    book_list_id integer REFERENCES book_list (book_list_id)
);


CREATE TABLE user_books (
    user_books_id SERIAL NOT NULL,
    sysuser_id integer REFERENCES sysuser (sysuser_id) NOT NULL,
    book_id integer REFERENCES book (book_id) NOT NULL,
    read boolean NOT NULL,
    date timestamptz NOT NULL,
    review text NOT NULL
);

CREATE TABLE author_book (
    author_book_id SERIAL PRIMARY KEY NOT NULL,
    author_id integer REFERENCES author (author_id) NOT NULL,
    book_id integer REFERENCES book (book_id) NOT NULL
);