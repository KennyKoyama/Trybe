CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE animals (
	id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  specie VARCHAR(40) NOT NULL,
  sex VARCHAR(6) NOT NULL,
  age INT NOT NULL,
  location VARCHAR(100) NOT NULL
);

CREATE TABLE managers (
	id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE caregivers (
	id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  manager_id INT,
  FOREIGN KEY(manager_id) REFERENCES managers(id)
);

CREATE TABLE caregiver_animals (
	caregiver_id INT,
	animal_id INT,
  CONSTRAINT PRIMARY KEY(caregiver_id, animal_id),
  FOREIGN KEY(caregiver_id) REFERENCES caregivers(id),
  FOREIGN KEY(animal_id) REFERENCES animals(id)
);
