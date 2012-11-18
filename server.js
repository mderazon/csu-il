var port = process.env.PORT || 8888;
var app = require('./app').init(port);

var locals = {
        title: 		 'CSNC',
        description: 'Node Express HTML5 & CSS3',
        author: 	 'Michael D',
		addDisqus:	 false
    };
var locals_lessons = {
        title: 		 'CSNC',
        description: 'Node Express HTML5 & CSS3',
        author: 	 'Michael D',
		addDisqus:	 true,
		layout:		 'layout-lessons'
    };
	
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
    res.render(controllerName + '.ejs', locals_lessons);
}
app.get('/:controllerName', viewsRouter);



/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', {layout:false});
});