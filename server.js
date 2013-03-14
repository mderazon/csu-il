var port = process.env.PORT || 8888;
var app = require('./app').init(port);
var markdown = require('./markdown');
var lessons = require('./lessons.json').lessons;

// app.use(function(req,res,next) {
//     console.log('adding lessons to locals');
//     res.locals.date = new Date().toLocaleDateString();
//     res.locals.lessons = lessons;
//     next();
// });
// app.use(app.router);

app.get('/', function (req, res) {
    console.log('controller is : home');
    res.locals.controller = 'home';
    res.render('home');
});

app.get('/:controller', function (req, res, next) {
  var controller = req.params.controller;
  console.log('controller is : '+ controller);
  console.log(JSON.stringify(res.locals, null, 4));
  if (controller == 'about' || controller == 'contact') {
    res.locals.controller = controller;
    res.render(controller);
  } else {
      next();
  }
});

app.get('/lessons', function(req, res) {
  res.locals.lessons = lessons;
  console.log('controller is : lessons');
  res.render('lessons');
});

app.get('/lessons/:lesson', function(req, res) {
    console.log('controller is : lesson');
    res.locals.controller = 'lessons';
    res.send('gimmie the lesson');
});

/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function (req, res) {
    console.log('got 404 request to ' + req.url);
    res.render('404');
});
