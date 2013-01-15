var express = require('express');
var app = express();

exports.init = function (port) {
    app.configure(function () {
        app.set('views', __dirname + '/views');
        app.set('view engine', 'ejs');
        app.use(express.bodyParser());
        //app.use(partials());
        app.use(express.methodOverride());
        app.use(express.logger());
        app.use(express.static(__dirname + '/static'));

        // add middleware to remove trailing slash in urls
        app.use(function (req, res, next) {
            if (req.url.substr(-1) == '/' && req.url.length > 1) {
                res.redirect(301, req.url.slice(0, -1));
            }
            next();
        });
        app.use(app.router);
        app.enable("jsonp callback");
    });


    app.configure('development', function () {
        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
        app.use(express.logger({
            format: ':method :url'
        }));
    });

    app.configure('production', function () {
        app.use(express.errorHandler());
    });

    app.use(function (err, req, res, next) {
        res.render('500.ejs', {
            locals: {
                error: err
            },
            status: 500
        });
    });

    app.listen(port);

    console.log("Listening on port %d in %s mode", port, app.settings.env);

    return app;
}
