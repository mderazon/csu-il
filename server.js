var port = process.env.PORT || 8888;
var app = require('./app').init(port);

var locals = {
        title: 		 'CSNC',
        description: 'Node Express HTML5 & CSS3',
        author: 	 'Michael D'
    };

app.get('/', function(req,res){
    locals.date = new Date().toLocaleDateString();
    res.render('home.ejs', locals);
});

app.get('/about', function(req,res){
    locals.date = new Date().toLocaleDateString();
    res.render('about.ejs', locals);
});
app.get('/contact', function(req,res){
    locals.date = new Date().toLocaleDateString();
    res.render('contact.ejs', locals);
});

app.get('/lesson', function(req,res){
    locals.date = new Date().toLocaleDateString();
    res.render('lesson.ejs', locals);
});

/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', {layout:false});
});