DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    salary INT,
    department VARCHAR(30) NOT NULL,
    FOREIGN KEY (department) REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE managers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    manager_name VARCHAR(60) NOT NULL
)

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name: VARCHAR(30) NOT NULL,
    last_name: VARCHAR(30) NOT NULL,
    job_title: VARCHAR(30) NOT NULL,
    department: VARCHAR(30) NOT NULL,
    salary: INT,
    manager: VARCHAR(60) NOT NULL,
    FOREIGN KEY (job_title) REFERENCES roles(job_title)
    FOREIGN KEY (department) REFERENCES departments(id)
    FOREIGN KEY (salary) REFERENCES roles(salary)
    FOREIGN KEY (manager) REFERENCES managers(manager_name)
    ON DELETE SET NULL
);
