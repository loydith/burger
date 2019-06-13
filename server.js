var express = require("express");

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static 
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on http://localhost:3306", PORT);
});
