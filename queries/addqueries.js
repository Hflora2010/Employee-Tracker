const inquirer = require("inquirer");
const connection = require("../db/connection");

const { getDepartments, getRoles, getEmployees } = require("./queries");

async function addEmployee(startApp) {
  try {
    const roles = await getRoles();
    const managers = await getEmployees();

    const employeeData = await inquirer.prompt([
      {
        type: "input",
        name: "first_name",
        message: "Enter the employee's first name:",
      },
      {
        type: "input",
        name: "last_name",
        message: "Enter the employee's last name:",
      },
      {
        type: "list",
        name: "role_id",
        message: "Select the employee's role:",
        choices: roles.map((role) => ({
          name: role.job_title,
          value: role.id,
        })),
      },
      {
        type: "list",
        name: "manager_id",
        message: "Select the employee's manager:",
        choices: [
          { name: "None", value: null },
          ...managers.map((manager) => ({
            name: `${manager.first_name} ${manager.last_name}`,
            value: manager.id,
          })),
        ],
      },
    ]);
    
    await connection.query("INSERT INTO employee SET ?", employeeData);
    console.log("New employee added successfully!");
    startApp();
} catch (err) {
    console.error(err);
}
}

async function addRole(startApp) {
  try {
    const departments = await getDepartments();

    const roleData = await inquirer.prompt([
      {
        type: "input",
        name: "job_title",
        message: "Enter the job title for the new role:",
      },
      {
        type: "number",
        name: "salary",
        message: "Enter the salary for the new role:",
      },
      {
        type: "list",
        name: "department_id",
        message: "Select the department for the new role:",
        choices: departments.map((department) => ({
          name: department.dpt_name,
          value: department.id,
        })),
      },
    ]);
    
    await connection.query("INSERT INTO role SET ?", roleData);
    console.log("New role added successfully!");
    startApp();
  } catch (err) {
    console.error(err);
  }
}

async function addDepartment(startApp) {
  try {
    const departmentData = await inquirer.prompt([
      {
        type: "input",
        name: "dpt_name",
        message: "Enter the name of the new department:",
      },
    ]);
    
    await connection.query("INSERT INTO department SET ?", departmentData);
    console.log("New department added successfully!");
    startApp();
  } catch (err) {
    console.error(err);
  }
}

module.exports = { addEmployee, addRole, addDepartment };
