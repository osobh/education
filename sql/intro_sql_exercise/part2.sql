DROP DATABASE IF EXISTS apartmentlab;

CREATE DATABASE apartmentlab;

\c apartmentlab

DROP TABLE IF EXISTS owners CASCADE;
DROP TABLE IF EXISTS properties ;

CREATE TABLE owners(id SERIAL PRIMARY KEY, name TEXT, age INTEGER);

CREATE TABLE properties (id SERIAL PRIMARY KEY, name TEXT, num_units INTEGER, owner_id INTEGER NOT NULL REFERENCES owners (id) ON DELETE CASCADE);

INSERT INTO owners (name,age) VALUES ('bob',33);
INSERT INTO owners (name) VALUES ('jim');
INSERT INTO owners (name,age) VALUES ('jane',53);
INSERT INTO owners (name,age) VALUES ('tom',33);
INSERT INTO owners (name,age) VALUES ('chrisine',33);
INSERT INTO owners (name,age) VALUES ('mary',73);

INSERT INTO properties (name,num_units, owner_id) VALUES ('archstone',33,1);
INSERT INTO properties (name,num_units, owner_id) VALUES ('grand plaza',33,1);
INSERT INTO properties (name,num_units, owner_id) VALUES ('hotel california',33,2);
INSERT INTO properties (name,num_units, owner_id) VALUES ('lovely place',33,2);
INSERT INTO properties (name,num_units, owner_id) VALUES ('galvanize seattle',33,2);
INSERT INTO properties (name,num_units, owner_id) VALUES ('galvanize fort collins',13,2);
INSERT INTO properties (name,num_units, owner_id) VALUES ('galvanize austin',33,2);
INSERT INTO properties (name,num_units, owner_id) VALUES ('galvanize denver platte',33,2);
INSERT INTO properties (name,num_units, owner_id) VALUES ('galvanize denver golden triangle',3,2);
INSERT INTO properties (name,num_units, owner_id) VALUES ('galvanize boulder',4,2);
INSERT INTO properties (name,num_units, owner_id) VALUES ('galvanize san francisco',33,2);
INSERT INTO properties (name,num_units, owner_id) VALUES ('briar patch',3133,4);
INSERT INTO properties (name,num_units, owner_id) VALUES ('island road',1133,4);
INSERT INTO properties (name,num_units, owner_id) VALUES ('Figueroa Mt Road',133,5);
INSERT INTO properties (name,num_units, owner_id) VALUES ('1020 Sunset Blvd',532,5);


