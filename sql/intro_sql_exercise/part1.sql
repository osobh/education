CREATE TABLE owner (
    owner_id SERIAL PRIMARY KEY NOT NULL,
    name text NOT NULL,
    age text NOT NULL
);

CREATE TABLE properties (
    properties_id SERIAL PRIMARY KEY ,
    name text NOT NULL,
    number_units integer NOT NULL,
    owner_id integer REFERENCES owner (owner_id) NOT NULL
);

