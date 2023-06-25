const connection = require('../db/connection');
    
async function viewAllDepartments() {
    try {
      const [rows] = await connection.query("SELECT * FROM department");
      console.table(rows);
      startApp();
    } catch (err) {
      console.error(err);
    }
  }


async function viewAllRoles() {
    try {
        const [rows] = await connection.query("SELECT role.id, role.job_title, department.dpt_name AS department, role.salary FROM role JOIN department ON department.id = role.department_id");
        console.table(rows);
        startApp();
    } catch (err) {
        console.error(err);
    }
}    

async function viewAllEmployees() {
    try {
      const [rows] = await connection.query(`
        SELECT 
          employee.id,
          employee.first_name,
          employee.last_name,
          role.job_title,
          department.dpt_name,
          role.salary,
          CONCAT(manager.first_name, ' ', manager.last_name) AS manager
        FROM 
          employee
          INNER JOIN role ON employee.role_id = role.id
          INNER JOIN department ON role.department_id = department.id
          LEFT JOIN employee manager ON employee.manager_id = manager.id
      `);
      console.table(rows);
      startApp();
    } catch (err) {
      console.error(err);
    }
  }

    module.exports = { viewAllDepartments, viewAllEmployees, viewAllRoles };