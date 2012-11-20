var port = process.env.PORT || 8888;
var app = require('./app').init(port);

var locals = {
        title: 		 'CSNC',
        description: 'Node Express HTML5 & CSS3',
        author: 	 'Michael D',
		addDisqus:	 false
    };
// copy locals for lessons
var locals_lessons = JSON.parse(JSON.stringify(locals));
locals_lessons.addDisqus = true;
locals_lessons.layout = 'layout-lessons';

	
app.get('/', function(req,res){
    locals.date = new Date().toLocaleDateString();	
    res.render('home.ejs', locals);
});	
	
function lessonsRouter (req, res, next)
{
    var lesson = req.params.lesson;
    res.render('lessons/' + lesson + '.ejs', locals_lessons);
}

app.get('/lessons/:lesson', lessonsRouter);


function viewsRouter (req, res, next)
{
    var controllerName = req.params.controllerName;
    res.render(controllerName + '.ejs', locals);
}
app.get('/:controllerName', viewsRouter);



/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', {layout:false});
});