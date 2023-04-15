const fs = require('fs');

const inquirer = require('inquirer');

const question = [
    {
        type: 'list',
        message: 'Please choose from the list below:',
        choices: [
            "view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"
        ],
        name: 'employee-database'
    },
]