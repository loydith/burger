var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  // res.render("/burgers");
    // burger.all(function(data){
    // var allBurger ={
    //   burgers: data,
    // };
  //   console.log(allBurger);
  //   res.render("index", allBurger);
  // })
  res.redirect("/burgers");
  
});

router.get("/burgers", function(req, res) {
  // express callback 
  burger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
   //  res.json(data);
  });
});

router.post("/burgers/create", function(req, res) {
  console.log("In create route in ID" + req.body.burger_name);
  
  burger.create(req.body.burger_name, function(result){
    console.log(result);
    res.redirect("/");
  })
// }
  // console.log(burgerData);
    // (newBurger, function(result) {
    // console.log(newBurger);
    // // res.status(200).end();
  // });
});

router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;
