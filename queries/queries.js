const connection = require('../db/connection');
    
async function viewAllDepartments() {
    try {
      const [rows] = await connection.query("SELECT * FROM department");
      console.table(rows);
      // Call the startApp function again to prompt the user for the next action
      startApp();
    } catch (err) {
      console.error(err);
    }
  }


async function viewAllRoles() {
    try {
        const [rows] = await connection.query("SELECT role.id, job_title, dpt_name AS department, salary FROM department INNER JOIN role ON department.id = role.department_id");
        console.table(rows);
        startApp();
    } catch (err) {
        console.error(err);
    }
}    

  function viewAllEmployees() {
    connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.job_title, department.dpt_name, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id",
      (err, results) => {
        if (err) throw new err;
        console.table(results);
        // Call the startApp function again to prompt the user for the next action
        startApp();
      }
    );
  }

    module.exports = { viewAllDepartments, viewAllDepartments, viewAllRoles };