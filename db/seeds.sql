INSERT INTO department (dpt_name)
VALUES 
("Admin" ),
("Beverage"), 
("Chefs"),
("Leadership"),
("Operations"),
("Sales");

INSERT INTO role (job_title, salary, department_id)
VALUES
("Founder", 1000000, 4),
("Managing Partner", 300000, 4),
("Front Office Coordinator", 45000, 1),
("Staffing Manager", 55000, 1),
("Catering Planner", 60000, 6),
("Catering Account Manager", 70000, 6),
("Director of Catering", 200000, 6),
("Catering Sales Manager", 80000, 6),
("Director of Operations", 100000, 5),
("Operations Coordinator", 70000, 5),
("Beverage Manager", 70000, 2),
("Beverage Assistnat", 60000, 2),
("Director of Culinary", 200000, 3), 
("Executive Chef", 100000, 3),
("Sous Chef", 80000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Marcia", "Selden", 1, null),
("Robin", "Selden", 2, 1),
("Jeffrey", "Selden", 3, null),
("Bianca", "Neu", 4, null),
("Samantha", "Cullinan", 5, 2),
("Elizabeth", "Kennedy", 6, null);




