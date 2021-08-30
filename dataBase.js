//-----------------Connect to mySQL DataBASE-----------------------//
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'MirandaDB'
})

connection.connect()

module.exports = connection;

