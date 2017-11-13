var path = require("path");
var express = require("express");
var app = module.exports = express();

// ROUTING

// module.exports = function(app) {

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// If no matching route is found default to home
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});
// };