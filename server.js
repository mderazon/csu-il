var port = process.env.PORT || 8888;
var app = require('./app').init(port);
var markdown = require('./markdown');
var lessons = require('./lessons.json');

app.get('/', function (req, res) {
    res.locals.controller = 'home';
    res.render('home');
});

app.get('/:controller', function (req, res, next) {
  var controller = req.params.controller;
  if (controller == 'about' || controller == 'contact') {
    res.locals.controller = controller;
    res.render(controller);
  } else {
      next();
  }
});

app.get('/lessons', function(req, res) {
  res.locals.controller = 'lessons';
  res.locals.lessons = lessons;
  res.render('lessons');
});

app.get('/lessons/:name', function(req, res, next) {
    res.locals.controller = 'lessons';
    var name = req.params.name;
    var lesson = lessons[name];
    if (!lesson) {
      return next();
    }
    lesson.path = 'lessons/' + name;
    lesson.file = lesson.path + '/' + name + '.md';
    markdown(lesson.file, function(result, err) {
      if (err) {
        console.log(err);
      }
      lesson.body = result;
      res.locals.lesson = lesson;
      res.render('lesson');
    });
});

/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function (req, res) {
    console.log('got 404 request to ' + req.url);
    res.render('404');
});
