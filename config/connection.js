// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.
var express = require("express");
var mysql = require("mysql");
var app = express();
// MySQL DB Connection Information (remember to change this with our specific credentials)

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "smoothies_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;