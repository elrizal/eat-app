var orm = require("../config/orm.js");
var drink = {
    all: function(cb) {
      orm.all("smoothies", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("smoothies", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("smoothies", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (smoothiesController.js).
  module.exports = drink;