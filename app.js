var express = require('express')
  , partials = require('express-partials')
  , app = express();
  

exports.init = function(port) {

    app.configure(function(){
    	app.set('views', __dirname + '/views');
    	app.set('view engine', 'ejs');
    	app.use(express.bodyParser());
		app.use(partials());
    	app.use(express.methodOverride());
    	app.use(express.static(__dirname + '/static'));
    	app.use(app.router);
    	app.enable("jsonp callback");
    });

    app.configure('development', function(){
	   app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
       app.use(express.logger({ format: ':method :url' }));
    });

    app.configure('production', function(){
	   app.use(express.errorHandler()); 
    });


    app.use(function(err, req, res, next){
	   res.render('500.ejs', { locals: { error: err },status: 500 });	
    });

    app.listen(port);

    console.log("Listening on port %d in %s mode", port, app.settings.env);

    return app;
}