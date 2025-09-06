const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/indexin.html")
});

app.listen(3300, function(){
console.log("server on port 3300")
});