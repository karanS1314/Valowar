const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://Karan:karanvalowar@cluster0.qcx3t.mongodb.net/valoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const teamSchema = {
  verified: Number,
  teamGroup: String,
  email: String,
  phnNumber: String,
  year: String,
  repName: String,

  teamName: String,
  teamBranch: String,
  teamMatch: Number,
  teamWins: Number,
  teamLoss: Number,
  teamTies: Number,
  teamPoints: Number,
  teamKills: Number,

  player1name: String,
  player1valoid: String,
  player1kills: Number,
  player1score: Number,

  player2name: String,
  player2valoid: String,
  player2kills: Number,
  player2score: Number,

  player3name: String,
  player3valoid: String,
  player3kills: Number,
  player3score: Number,

  player4name: String,
  player4valoid: String,
  player4kills: Number,
  player4score: Number,

  player5name: String,
  player5valoid: String,
  player5kills: Number,
  player5score: Number,

  player6name: String,
  player6valoid: String,
  player6kills: Number,
  player6score: Number,

  player7name: String,
  player7valoid: String,
  player7kills: Number,
  player7score: Number,

};

const Team = mongoose.model("Team", teamSchema);


app.get("/", function(req, res) {
  res.render("home");
})

app.get("/contact", function(req, res) {
  res.render("contact");
})
app.get("/leaderboard", function(req, res) {
  Team.find({
    verified: "1"
  }).sort({
    teamPoints: -1
  }).sort({
    teamKills: -1
  }).exec(function(err, verifiedTeams) {
    res.render("leaderboard", {
      vTeams: verifiedTeams
    });
  });
})
app.get("/details", function(req, res) {
  res.render("details");
})
app.get("/news", function(req, res) {
  res.render("news");
})

app.get("/registration", function(req, res) {
  Team.find({
    verified: "1"
  }).exec(function(err, verifiedTeams) {
    res.render("registration", {
      vTeams: verifiedTeams
    });
  });

})
app.post("/registration", function(req, res) {

  const team = new Team({
    verified: 0,
    teamGroup: "x",
    email: req.body.email,
    phnNumber: req.body.phonenumber,
    year: req.body.year,
    repName: req.body.Name,
    teamName: req.body.teamName,
    teamBranch: req.body.branch,
    teamMatch: 0,
    teamWins: 0,
    teamLoss: 0,
    teamTies: 0,
    teamPoints: 0,
    teamKills: 0,


    player1name: req.body.name1,
    player1valoid: req.body.valoid1,
    player1kills: 0,
    player1score: 0,

    player2name: req.body.name2,
    player2valoid: req.body.valoid2,
    player2kills: 0,
    player2score: 0,

    player3name: req.body.name3,
    player3valoid: req.body.valoid3,
    player3kills: 0,
    player3score: 0,

    player4name: req.body.name4,
    player4valoid: req.body.valoid4,
    player4kills: 0,
    player4score: 0,

    player5name: req.body.name5,
    player5valoid: req.body.valoid5,
    player5kills: 0,
    player5score: 0,

    player6name: req.body.name6,
    player6valoid: req.body.valoid6,
    player6kills: 0,
    player6score: 0,

    player7name: req.body.name7,
    player7valoid: req.body.valoid7,
    player7kills: 0,
    player7score: 0,

  })
  team.save();


  res.redirect("/success");

})

app.get("/success", function(req, res) {

  res.render("success");

})
app.get("/players", function(req, res) {

  Team.find({
    verified: "1"
  }).sort({
    teamName: 1
  }).exec(function(err, verifiedTeams) {
    res.render("players", {
      vTeams: verifiedTeams
    });
  });


})


pp.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
