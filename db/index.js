const connection = require("./connection");

const database = {
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