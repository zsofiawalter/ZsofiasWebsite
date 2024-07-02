-- Create Tables

CREATE TABLE Locations (
    id INT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name VARCHAR(30) NOT NULL,
    latitude DECIMAL (9, 6) NOT NULL,
    longitude DECIMAL (9, 6) NOT NULL
);