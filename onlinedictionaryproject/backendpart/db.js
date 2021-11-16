const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'entries'
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Connected to the database.");
});

module.exports = connection;