DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- Create tables 
CREATE TABLE departments (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
   department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
   title VARCHAR(30) NOT NULL,
   -- made the salary a string so that I could make it show that it was at an hourly rate rather than yearly. the decimal kept on rounding the number up and i didn't want that
   salary VARCHAR(30) NOT NULL,
   department_id INT,
   CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   role_id INT,
   manager_id INT,
   CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
   CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);
