// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var smoothieModel = {
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
  },
  delete: function(condition, cb) {
    orm.delete("smoothies", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = smoothieModel;
