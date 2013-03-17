var express = require('express');
var slashes = require('connect-slashes');


exports.init = function (port) {
  var app = express();
  app.use(express.static(__dirname + '/public'));
  app.use('/lessons', express.static(__dirname + '/lessons', { redirect : false }));
  // add middleware to remove trailing slash in urls
  app.use(slashes(false));
  app.use(express.logger({
    format: ':method :url'
  }));
  app.set('views', __dirname + '/views')
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.logger());
  app.enable("jsonp callback");
  if ('development' == app.get('env')) {
    app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  }

  if ('production' == app.get('env')) {
    app.use(express.errorHandler());
  }

  app.use(function (err, req, res, next) {
    console.log('Oops, something went wrong');
    res.render('500.ejs', {
      locals: {
        error: err
      },
      status: 500
    });
  });

  app.listen(port);

  console.log("Listening on port %d in %s mode", port, app.settings.env);

  return app;
}