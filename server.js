var port = process.env.PORT || 8888;
var app = require('./app').init(port);
var lessons = require('./lessons');

var locals = {
    title: 'מדעי המחשב ללא מחשב',
    description: 'Node Express HTML5 & CSS3',
    author: 'Michael D',
    add_disqus: 'false',
    controller: 'home' // this is for active navbar item in layout
};

app.get('/', function (req, res) {
    locals.date = new Date().toLocaleDateString();
    locals.controller = 'home';
    res.render('home', locals);
});


app.get('/:controllerName', function (req, res, next) {
    var controllerName = req.params.controllerName;
    locals.controller = controllerName;
    if (controllerName == 'about' || controllerName == 'contact') {
        res.render(controllerName, locals);
    } else {
        next();
    }
});

app.get('/lessons', lessons.get_all_lessons_handler);

app.get('/lessons/:lesson', lessons.get_lesson_handler);


/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function (req, res) {
    console.log('got 404 request to ' + req.url);
    res.render('404.ejs', {
        layout: false
    });
});
