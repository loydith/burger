var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  // res.render("/burgers");
    burger.all(function(data){
    var allBurger ={
      burgers: data,
    };
    console.log(allBurger);
    res.render("index", allBurger);
  })
  
});

router.get("/api/burgers", function(req, res) {
  // express callback 
  burger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
   //  res.json(data);
  });
});

router.post("/burgers/create", function(req, res) {
  var newBurger = req.body.burger_name;
  burger.create(newBurger, function(result) {
    console.log(result);
    // res.status(200).end();
    res.redirect("/", newBurger);
  });
});

router.put("/api/burger/:id", function(req, res) {
  burger.update(req.params.id, function(res) {
    console.log(res);
    res.sendStatus(200);
  });
});

module.exports = router;
