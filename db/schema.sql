DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- Create tables 
CREATE TABLE departments (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
   department_name VARCHAR(30) NOT NULL,
)

CREATE TABLE roles(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
   job_title VARCHAR(30) NOT NULL,
   salary INT NOT NULL,
   department_id 
   -- connect to department table id.
)

CREATE TABLE employees(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   job_title,
   -- connect to roles table
   department_id,
   -- connect to department table
   salary INT NOT NULL,
   managers
)
