SELECT department_id, department_name
FROM departments;

SELECT roles.role_id, roles.job_title, roles.salary, departments.department_name
FROM roles;
INNER JOIN departments ON roles.department_id = departments.department_id;

SELECT employees.employee_id, employees.first_name, employees.last_name, roles.job_title, departments.department_name, roles.salary, managers.managers_name 
FROM employees;
INNER JOIN roles ON employees.job_title = roles.job_title;
INNER JOIN departments ON employees.department = departments.department_name;
INNER JOIN roles ON employee.salary = roles.salary;
INNER JOIN managers ON employee.manager = managers.manager_name;

