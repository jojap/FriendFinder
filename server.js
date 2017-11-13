// uses Npm packages `express`, `body-parser` and `path`
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// port for listening
var PORT = process.env.PORT || 3000;

// Sets up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

app.use(apiRoutes);
app.use(htmlRoutes);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});