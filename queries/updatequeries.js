const inquirer = require("inquirer");
const connection = require("../db/connection");
const { getEmployees, getRoles } = require("./queries");

async function updateEmployee(startApp) {
  try {
    
    const employees = await getEmployees();

    
    const employeeChoices = employees.map((employee) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id,
    }));
    const { employeeId } = await inquirer.prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Select an employee to update:",
        choices: employeeChoices,
      },
    ]);

    
    const roles = await getRoles();

    
    const roleChoices = roles.map((role) => ({
      name: role.job_title,
      value: role.id,
    }));
    const { roleId } = await inquirer.prompt([
      {
        type: "list",
        name: "roleId",
        message: "Select a new role for the employee:",
        choices: roleChoices,
      },
    ]);

    
    await connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [
      roleId,
      employeeId,
    ]);
    console.log("Employee role updated successfully!");

    startApp();
  } catch (error) {
    console.error("Error updating employee role:", error);
    startApp();
  }
}

module.exports = { updateEmployee };