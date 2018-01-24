// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.
var express = require("express");
var mysql = require("mysql");
var app = express();
// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "smoothies_db"
  });
  
  // Initiate MySQL Connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });


//  // connect to your database
//  mysql.connect(connection, function (err) {
    
//     if (err) console.log(err);

//     // create Request object
//     var request = new mysql.Request();
       
//     // query to the database and get the records
//     request.query('SELECT * FROM smoothie_name', function (err, recordset) {
        
//         if (err) console.log(err)
//         res.send(recordset);
        
//     });
// });

// app.get("/smoothies", function(req, res) {
//     connection.query("SELECT * FROM smoothies order by id", function(err, result) {
//       var html = "<h1>Smoothies Ordered BY ID</h1>";
  
//       html += "<ul>";
  
//       for (var i = 0; i < result.length; i++) {
//         html += "<li><p> ID: " + result[i].id + "</p>";
//         html += "<p> Name: " + result[i].smoothie_name + "</p>";
//         html += "<p> Drank: " + result[i].drank + "</p>";
//         html += "<p>Delisiousness: " + result[i].delicious_points + "</p></li>";
//       }
  
//       html += "</ul>";
  
//       res.send(html);
//     });
//   });
  
//   app.get("/delicious_points", function(req, res) {
//     connection.query("SELECT * FROM smoothies order by delicious_points DESC", function(err, result) {
//       var html = "<h1>Smoothies by deliciousness</h1>";
  
//       html += "<ul>";
  
//       for (var i = 0; i < result.length; i++) {
//         html += "<li><p> ID: " + result[i].id + "</p>";
//         html += "<p> Name: " + result[i].smoothie_name + "</p>";
//         html += "<p> Drank: " + result[i].drank + "</p>";
//         html += "<p>Delisiousness: " + result[i].delicious_points + "</p></li>";
//       }
  
//       html += "</ul>";
  
//       res.send(html);
//     });


  module.exports = mysql;