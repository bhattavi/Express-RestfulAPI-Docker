var express = require("express");
var bodyParsee = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

app.use(bodyParsee());
app.use(cors());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("pulic"));


var fs = require("fs");

var content = fs.readFileSync("pokemon.json");
var img = fs.readFileSync("img.json");

var pokemon = JSON.parse(content);
var pictures = JSON.parse(img);

app.get("/", function(req, res) {
  res.render("index");
});
app.get("/getpokemon", function(req, res) {
  myPokemon = [];

  pokemon.forEach(pokemon => {
    myPokemon.push(pokemon);
  });

  res.render("pokemons", {
    poke: myPokemon
  });
});
app.get("/getpokemon/:id", function(req, res) {
  var id = req.params.id;

  myPokemon = [];

  pokemon.forEach(pokemon => {
    if (pokemon.id === id) {
      myPokemon.push(pokemon);
    }
  });
  if(myPokemon[0] == undefined){
    res.render("error", {
      msg: "You entered the wrong pokemon Id."
    })
  }else{
  res.render("card", {
    poke: myPokemon,
    pics: pictures[myPokemon[0].name]
  });
}
});

app.get("/getpokemon/:id/evolution", function(req, res) {
  var id = req.params.id;

  myPokemon = [];
  temp = [];

  pokemon.forEach(pokemon => {
    if (pokemon.id === id) {
      temp.push(pokemon.evolution);
    }
  });

  evolution = temp[0];

  evolution.forEach(evolution => {
    pokemon.forEach(pokemon => {
      if (pokemon.name == evolution) {
        myPokemon.push(pokemon);
      }
    });
  });
 
  res.render("evolution", {
    poke: myPokemon
  });

});

app.get("/getpokemon/:id/evolution/:evoId", function(req, res) {
  var id = req.params.id;
  var evoId = req.params.evoId;

  myPokemon = [];
  temp = [];

  pokemon.forEach(pokemon => {
    if (pokemon.id === id) {
      temp.push(pokemon.evolution);
    }
  });

  evolution = temp[0];
  evoPokemon = [];

  evolution.forEach(evolution => {
    pokemon.forEach(pokemon => {
      if (pokemon.name == evolution) {
        evoPokemon.push(pokemon);
      }
    });
  });

  evoPokemon.forEach(pokemon => {
    if (pokemon.id == evoId) {
      myPokemon.push(pokemon);
    }
  });
  if(myPokemon[0] == undefined){
    res.render("error", {
      msg: "You entered the wrong evolution Id."
    })
  }else{
  res.render("card", {
    poke: myPokemon,
    pics: pictures[myPokemon[0].name]
  });
  }
});



app.get("*", function(req, res) {
  res.render("error", {
    msg: "You entered the wrong link."
  })
});


app.listen(3000, function() {
  console.log("Server has been started!");
});
