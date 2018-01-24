-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE smoothies_db;
USE smoothies_db;

CREATE TABLE smoothies (
  id int AUTO_INCREMENT,
  smoothie_name varchar(30) NOT NULL,
  drank BOOLEAN, 
  delicious_points int NOT NULL,
  PRIMARY KEY(id)
);

