var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
// selectAll()
// insertOne()
// updateOne()
var orm = {
  selectOne: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM smoothies WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT one FROM smoothies";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectAll: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * ALL FROM smoothies";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
}
  
};

module.exports = orm;