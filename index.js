const { inquirer } = require("inquirer");
const mysql = require("mysql");
const connection = require("./db/connection");

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
        case "View all Departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
            viewAllEmployees();
            break;
        case "Add a Department":
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
    // function viewAllDepartments() {
    //     const query = `SELECT * FROM department`;
    //     connection.query(query, (err, res) => {
    //         if (err) throw err;
    //         console.log("All Departments");
    //         console.table(res);

    //         prompt();
    //     });
    // }

    // function viewAllRoles() {
    //         const query = `
    //           SELECT role.id, role.job_title, role.salary, department.dpt_name 
    //           FROM role
    //           INNER JOIN department ON role.department_id = department.id
    //         `;
    //         connection.query(query, (err, res) => {
    //           if (err) throw err;
    //           console.log('All Roles:');
    //           console.table(res);

    //           prompt();
    //         });
    //       }
