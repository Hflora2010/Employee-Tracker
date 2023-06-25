const connection = require('../db/connection');


//shows department data to the user
async function viewAllDepartments(startApp) {
    try {
      const [rows] = await connection.query("SELECT * FROM department");
      console.table(rows);
      startApp();
    } catch (err) {
      console.error(err);
      startApp();
    }
  }

//shows role data to the user
async function viewAllRoles(startApp) {
    try {
        const [rows] = await connection.query("SELECT role.id, role.job_title, department.dpt_name AS department, role.salary FROM role JOIN department ON department.id = role.department_id");
        console.table(rows);
        startApp();
    } catch (err) {
        console.error(err);
        startApp();
    }
}    

//shows employee data to the user
async function viewAllEmployees(startApp) {
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



  //gets all roles from the database
  async function getRoles() {
    const [rows] = await connection.query("SELECT * FROM role");
    return rows;
  }

  //gets all employees from the database
  async function getEmployees() {
    const [rows] = await connection.query("SELECT * FROM employee");
    return rows;
  }

  //gets all departments from the database
  async function getDepartments() {
    const [rows] = await connection.query("SELECT * FROM department");
    return rows;
  }

    module.exports = { viewAllDepartments, viewAllEmployees, viewAllRoles, getRoles, getEmployees, getDepartments };