SELECT id, department_name
FROM department;

SELECT role.id, role.job_title, role.salary, department.department_name
FROM role
JOIN department ON role.department_id = department.id

SELECT employee.id, employee.first_name, employee.last_name, role.job_title, department.department_name, role.salary, employee.manager_id
FROM employee
JOIN department ON employee.department = department.department_name;
JOIN role ON employee.salary = role.salary;


