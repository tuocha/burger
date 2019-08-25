var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");

var app = express();


var PORT = process.env.PORT || 8080;


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ 
    defaultLayout: "main",
    helpers: { 
        json: function (context) { 
            return JSON.stringify(context); 
        }
    }        
}));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controllers");

app.use(routes);


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
