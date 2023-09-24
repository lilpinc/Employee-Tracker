DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- Create tables 
CREATE TABLE departments (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
   department_name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
   job_title VARCHAR(30) NOT NULL,
   salary DECIMAL NOT NULL,
   department_id INT,
   -- connect to department table id.
   FOREIGN KEY (department_id)
   REFERENCES departments(id)
   ON DELETE SET NULL
);

CREATE TABLE employees(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   role_id INT,
   department_id INT,
   manager_id INT,
   -- connect to roles table
   FOREIGN KEY (role_id)
   REFERENCES roles(id)
   FOREIGN KEY (department_id)
   REFERENCES department(id)
   FOREIGN KEY (manager_id)
   REFERENCES employees(id)
   -- connect to department table
);
