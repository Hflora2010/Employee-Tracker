const connection = require("./connection");

const database = {
    
    getAllDepartments() {
        console.log('Getting all departments...')
    return connection.promise().query('SELECT * FROM departments').then((result) => {

    }).catch(err => console.error(err))
},

    getAllEmployees() {
        console.log('Getting all employees...')
    return connection.promise().query('SELECT * FROM employees').then((result) => {
        console.log(result)
    }).catch(err => console.error(err))
},

    createEmployee(employee = {}) {
        console.log('creating new employee')
    return connection.promise().query('INSERT INTO employees VALUES ?', employee)
    }
}

module.exports = database;