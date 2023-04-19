INSERT INTO departments (id, department_name)
VALUES 
(1, "Admin" ),
(2, "Beverage"), 
(3, "Chefs"),
(4, "Leadership")
(5, "Operations"),
(6, "Sales");

INSERT INTO roles (id, job_title, salary, department)
VALUES
(1, "Founder", "1,000,000", 4),
(2, "Managing Partner", "300,000", 4),
(3, "Front Office Coordinator", "45,000" 1),
(4, "Staffing Manager", "55,000", 1),
(5, "Catering Planner" "60,000" 6),
(6, "Catering Account Manager", "70,000", 6),
(7, "Director of Catering", "200,000" 6),
(8, "Catering Sales Manager", "80,000", 6),
(9, "Director of Operations", "100,000", 5),
(10, "Operations Coordinator", "70,000", 5),
(11, "Beverage Manager", "70,000", 2),
(12, "Beverage Assistnat", "60,000", 2),
(13, "Director of Culinary", "200,000", 3), 
(14, "Executive Chef", "100,000", 3),
(15, "Sous Chef", "80,000", 3),
(16, "Pref Chef", "60,000", 3);

INSERT INTO managers (id, manager_name)
VALUES
(1, "Marcia Selden"),
(2, "Jeffrey Selden"), 
(3, "Robin Selden"), 
(4, "Samantha Cullinan"),
(5, "Jennifer Reilly"),
(6, "Stephanie Block"),
(7, "Danny Lima"),
(8, "Steven Jung");

INSERT INTO employees (id, first_name, last_name, job_title, department, salary, manager)
VALUES
(1, "Marcia", "Selden", "Founder", "Leadership", "1,000,000"),
(2, "Robin", "Selden", "Managing Partner", "Leadership", "300,000"),
(3, "Jeffrey", "Selden", "Managing Partner", "Leadership", "300,000"),
(4, "Bianca", "Neu", "Front Office Coodinator", "Admin", "45,000", "Samantha Cullinan"),
(5, "Samantha", "Cullinan", "Staffing Manager", "Admin" "65,000", "Robin Selden"),
(6, "Elizabeth", "Kennedy", "Catering Planner", "Sales", "60,000", "Jennifer Reilly"),
(7, "Jeanna", "Smith", "Catering Account Manager", "Sales", "70,000", "Jennifer Reilly"),
(8, "Jennifer", "Reilly", "Director of Catering", "Sales", "200,000", "Jeffrey Selden"), 
(9, "Nicole", "Warlof", "Catering Sales Manager", "Sales", "80,000", "Jennifer Reilly"), 
(10, "Stephanie", "Block", "Director of Operations", "Operations", "100,000", "Jeffrey Selden"), 
(11, "Hailey", "Flora", "Opeations Coodinator", "Operations", "70,000", "Stephanie Block"),
(12, "Danny", "Lima", "Beverage Manager", "Beverage", "70,000", "Stephanie Block"),
(13, "Andrew", "Anderson", "Beverage Assistant", "Beverage", "60,000", "Danny Lima"),
(14, "Steven", "Jung", "Director of Culinary", "Chefs", "200,000", "Robin Selden"),
(15, "Walter", "Shapiro", "Executive Chef", "Chefs", "100,000", "Steven Jung"),
(16, "Ricardo", "Wright", "Sous Chef", "Chefs", "80,000", "Steven Jung"), 
(17, "Janice", "Perez", "Prep Chef", "Chefs", "60,000", "Steven Jung");



