var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

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
