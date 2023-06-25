const inquirer = require("inquirer"); 
// const mysql = require("mysql");
// const connection = require("./db/connection");

const { viewAllDepartments, viewAllRoles, viewAllEmployees } = require("./queries/queries");
const { addEmployee, addRole, addDepartment } = require("./queries/addqueries");
const { updateEmployee } = require("./queries/updatequeries");


function startApp() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "View all departments":
          viewAllDepartments(startApp);
          break;
        case "View all roles":
          viewAllRoles(startApp);
          break;
        case "View all employees":
            viewAllEmployees(startApp);
            break;
        case "Add a department":
            addDepartment(startApp);
            break;
        case "Add a role":
            addRole(startApp);
            break;
        case "Add an employee":
            addEmployee(startApp);
            break;
        case "Update an employee":
            updateEmployee(startApp);
            break;
        case "Exit":
          console.log("Bye!");
          process.exit();
      }
    });
}

startApp();
