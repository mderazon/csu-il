var express = require('express');
var harp = require('harp');
var logger = require('morgan');
var body_parser = require('body-parser');

var mailer = require('./mailer');

var app = express();

var logger_format = ':remote-addr - - [:date] ":method :url" :status ":referrer" ":user-agent"';
app.use(express.static(__dirname + "/public"));
app.use(logger(logger_format));
app.use(harp.mount(__dirname + "/public"));


// to get the contact form data
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

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
