var express = require("express");
var harp = require("harp");
var app = express();
var mailer = require('./mailer');

app.configure(function(){
  app.use(express.static(__dirname + "/public"));
  app.use(harp.mount(__dirname + "/public"));
});

// to get the contact form data
app.use(express.json());
app.use(express.urlencoded());

app.post('/contact-submit', function(req, res, next) {
  var payload = {
    email: req.body.email,
    name: req.body.name,
    message: req.body.message,
  };
  if (!payload.email || !payload.name || !payload.message) {
    return res.send(400, 'One of the fields is missing...');
  }

  mailer(payload, function(err, response) {
    if (err) {
      console.error('MAILER ERROR:', err);
      return res.send(500);
    }
    console.log("Message sent: " + response.message);
    res.redirect('/contact-confirmed');
  });
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log("listening on port", port);
