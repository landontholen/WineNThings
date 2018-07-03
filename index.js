var bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer"), 
    methodOverride = require("method-override"), 
//    mongoose = require("mongoose"),
    express = require("express"),
    app = express(); 

//mongoose.connect("mongod://localhost/winenthings"); 

app.set("view engine", "ejs"); 
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(expressSanitizer()); 
app.use(methodOverride("_method")); 

app.get("/", function(req, res){
    res.render("index"); 
}); 

app.get("/events", function(req, res){
    res.render("show"); 
}); 

app.listen(3000, ()=> console.log("The Wine'N'Things server has been started.")); 
