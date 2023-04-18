INSERT INTO departments (id, department_name)
VALUES 
(001, "Admin" ),
(002, "Beverage"), 
(003, "Chefs"),
(004, "Leadership")
(005, "Operations"),
(006, "Sales");

INSERT INTO roles (id, job_title, salery, department)
VALUES
(001, "Founder", "1,000,000," "Leadership"),
(002, "Managing Partner", "300,000", "Leadership"),
(003, "Front Office Coordinator", "45,000" "Admin"),
(004, "Staffing Manager", "55,000", "Admin"),
(005, "Catering Planner" "60,000" "Sales"),
(006, "Catering Account Manager", "70,000", "Sales"),
(007, "Director of Catering", "200,000" "Sales"),
(008, "Catering Sales Manager", "80,000", "Sales"),
(009, "Director of Operations", "100,000", "Operations"),
(010, "Operations Coordinator", "70,000", "Operations"),
(011, "Beverage Manager", "70,000", "Beverage"),
(012, "Beverage Assistnat", "60,000", "Beverage"),
(013, "Director of Culinary", "200,000", "Chefs"), 
(014, "Executive Chef", "100,000", "Chefs"),
(015, "Sous Chef", "80,000", "Chefs"),
(016, "Pref Chef", "60,000", "Chefs");

INSERT INTO employees (id, first_name, last_name, job_title, department, salery, manager)
VALUES
(001, "Marcia", "Selden", "Founder", "Leadership", "1,000,000"),
(002, "Robin", "Selden", "Managing Partner", "Leadership", "300,000"),
(003, "Jeffrey", "Selden", "Managing Partner", "Leadership", "300,000"),
(004, "Bianca", "Neu", "Front Office Coodinator", "Admin", "45,000", "Samantha Cullinan"),
(005, "Samantha", "Cullinan", "Staffing Manager", "Admin" "65,000", "Robin Selden"),
(006, "Elizabeth", "Kennedy", "Catering Planner", "Sales", "60,000", "Jennifer Reilly"),
(007, "Jeanna", "Smith", "Catering Account Manager", "Sales", "70,000", "Jennifer Reilly"),
(008, "Jennifer", "Reilly", "Director of Catering", "Sales", "200,000", "Jeffrey Selden"), 
(009, "Nicole", "Warlof", "Catering Sales Manager", "Sales", "80,000", "Jennifer Reilly"), 
(010, "Stephanie", "Block", "Director of Operations", "Operations", "100,000", "Jeffrey Selden"), 
(011, "Hailey", "Flora", "Opeations Coodinator", "Operations", "70,000", "Stephanie Block"),
(012, "Danny", "Lima", "Beverage Manager", "Beverage", "70,000", "Stephanie Block"),
(013, "Andrew", "Anderson", "Beverage Assistant", "Beverage", "60,000", "Danny Lima"),
(014, "Steven", "Jung", "Director of Culinary", "Chefs", "200,000", "Robin Selden"),
(015, "Walter", "Shapiro", "Executive Chef", "Chefs", "100,000", "Steven Jung"),
(016, "Ricardo", "Wright", "Sous Chef", "Chefs", "80,000", "Steven Jung"), 
(017, "Janice", "Perez", "Prep Chef", "Chefs", "60,000", "Steven Jung");



