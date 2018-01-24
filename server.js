
var methodoverride = require ("method-override");
var bodyparser = require("body-parser");
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var path = require("path");
 var PORT = process.env.PORT || 5000;

var app = express();


// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Routes
app.get("/smoothies/:smoothie_name", function(req, res) {
  for (var i = 0; i < icecreams.length; i++) {
    if (icecreams[i].name === req.params.name) {
      return res.render("icecream", icecreams[i]);
    }
  }
});

// app.get("/smoothies", function(req, res) {
//   res.render("ics", { ics: smoothies });
// });

// Initiate the listener.


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  