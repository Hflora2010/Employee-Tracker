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
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
            viewAllEmployees();
            break;
        case "Add a department":
            addDepartment();
            break;
        case "Add a role":
            addRole();
            break;
        case "Add an employee":
            addEmployee();
            break;
        case "Update an employee":
            updateEmployee();
            break;
        case "Exit":
          process.exit();
      }
    });
}

startApp();
