DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- Create tables 
CREATE TABLE departments (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
   department_name VARCHAR(30) NOT NULL,
)
-- needs id, name, etc.




CREATE TABLE roles(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
   role_name VARCHAR(30) NOT NULL,
)
-- needs id, name, etc



CREATE TABLE employees(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
--    add connection to departments and roles 
)
--  needs id, name, etc