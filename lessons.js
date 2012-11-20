var locals = {
        title: 		 'CSNC',
        description: 'Node Express HTML5 & CSS3',
        author: 	 'Michael D',
		layout:		 '/lessons/layout',
		addDisqus:	 true,
		controller:	'lessons' // TODO remove after
};

var lessons = require('./views/lessons/lessons.json').lessons;
	
exports.get_lesson_handler = function (req, res, next)
{
    var lesson = req.params.lesson;
    res.render('lessons/' + lesson + '.ejs', locals);
}

exports.get_all_lessons_handler = function (req, res, next)
{
	locals.layout = 'layout';
	locals.lessons = lessons;
	res.render('lessons.ejs', locals);
}