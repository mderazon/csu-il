var port = process.env.PORT || 8888;
var app = require('./app').init(port);

var locals = {
        title: 		 'CSNC',
        description: 'Node Express HTML5 & CSS3',
        author: 	 'Michael D',
		layout: '/layout',
		addDisqus:	 false,
		controller:	'home'
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
	
function lessonsRouter (req, res, next)
{
    var lesson = req.params.lesson;
    res.render('lessons/' + lesson + '.ejs', locals_lessons);
}

app.get('/lessons/:lesson', lessonsRouter);

function homeRouter (req, res, next)
{
	var controllerName = req.params.controllerName;
	locals.controller = controllerName;
	if (controllerName == 'about' || controllerName == 'contact' || controllerName == 'lessons') {
		res.render(controllerName + '.ejs', locals);
	}
	else {
		
		next();
	}
}

app.get('/:controllerName', homeRouter);

/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', {layout:false});
});