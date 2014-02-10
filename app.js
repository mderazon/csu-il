var express = require("express");
var harp = require("harp");
var app = express();

app.configure(function(){
  app.use(express.static(__dirname + "/public"));
  app.use(harp.mount(__dirname + "/public"));
});


app.listen(process.env.PORT || 8080);