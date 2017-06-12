var express = require("express");
var app = express();

//app.get("/ivan",function(req,res){
//    res.send("Hola, como estas?");
//});

app.use(express.static(__dirname + "/public/"));

app.listen(3000, function(){
    console.log("servidor esuchando en el puerto 3000")
});