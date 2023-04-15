require ('dotenv').config()
const mysql = require('mysql2')
console.log(process.env)

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    port: 3306,
    database: 'employee_tracker_db'    
});

connection.connect((err) => err ? true : false);
console.log(connection); 

module.exports = connection;