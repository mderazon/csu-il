var lessons = require('./views/lessons/lessons.json').lessons;

var locals = {
        title: 		 'מדעי המחשב ללא מחשב',
        description: 'Node Express HTML5 & CSS3',
        author: 	 'Michael D',
		add_disqus:	 'true',
		controller:	'lessons' // TODO remove after
};


exports.get_lesson_handler = function (req, res, next)
{
    var lesson = req.params.lesson;
    res.render('lessons/' + lesson + '/' + lesson, locals);
}

exports.get_all_lessons_handler = function (req, res, next)
{
	locals.lessons = lessons;
	res.render('lessons/lessons', locals);
}