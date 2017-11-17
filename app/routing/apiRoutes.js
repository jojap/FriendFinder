var friendDatas = require("../data/friends");
var express = require("express");
var app = module.exports = express();

app.get("/api/friends", function (req, res) {
  res.json(friendData);
});

app.post("/api/friends", function (req, res) {

  var newFriend = req.body;

  var friendCalculation = [];


  for (var i = 0; i < newFriend.answers.length; i++){
    newFriend.answers[i] = parseInt(newFriend.answers[i]);
  }


  var friendCalculation = [];

  for (var i = 0; i < friendDatas.length; i++) {
    var friendData = friendDatas[i].answers;
    var totalDifference = 0;
    for (var j = 0; j < friendData.length; j++) {
      var friendAnswer = parseInt(friendData[j]);
      totalDifference = totalDifference + Math.abs(friendAnswer - newFriend.answers[j]);
    }
    friendCalculation.push(totalDifference);

  }

  Array.min = function (array) {
    return Math.min.apply(Math, array);
  };

  var minimumDifference = Array.min(friendCalculation);

  var bestMatch = friendDatas[friendCalculation.indexOf(minimumDifference)];

  friendData.push(newFriend);
  res.send(bestMatch);


});
