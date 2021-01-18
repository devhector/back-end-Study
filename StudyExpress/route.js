const express = require('express');
const app = express();

app.get("/", function (req, res){
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/teste/:um/:dois", function(req, res){
    res.send(req.params);
});


app.listen(7500, function(){
    console.log("Server running!");
});