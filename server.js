var port = process.env.PORT || 8888;
var app = require('./app').init(port);
var lessons = require('./lessons');

var locals = {
        title: 		 'CSNC',
        description: 'Node Express HTML5 & CSS3',
        author: 	 'Michael D',
		layout:		 'layout',
		controller:  'home' // this is for active navbar item in layout
    };
// copy locals for lessons
var locals_lessons = JSON.parse(JSON.stringify(locals));
locals_lessons.addDisqus = true;
locals_lessons.layout = '/lessons/layout';
locals_lessons.controller = 'lessons';

app.get('/', function(req,res){
    locals.date = new Date().toLocaleDateString();
	locals.controller = 'home';
    res.render('home.ejs', locals);
});	
	

function homeRouter (req, res, next)
{
	var controllerName = req.params.controllerName;
	locals.controller = controllerName;
	if (controllerName == 'about' || controllerName == 'contact') {
		res.render(controllerName + '.ejs', locals);
	}
	else{
		next();
	}
}

app.get('/:controllerName', homeRouter);

app.get('/lessons', lessons.get_all_lessons_handler);

app.get('/lessons/:lesson', lessons.get_lesson_handler);


/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', {layout:false});
});