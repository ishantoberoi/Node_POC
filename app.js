var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var csrf = require('csurf');
var utils = require('./lib/utils.js').utils;
var util = require('util');
var registerRoutes = require('./routes/register.js');


var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*
console.log(util.inspect(util,{
    depth:null,
    colors:true
}));
utils.log(util.inspect(global, {
    depth: null,
    colors: true
}));*/

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {maxAge: -100}));
app.use(session({
    secret: 'FKPG',
    saveUninitialized: true,
    resave: true
}));

process.on('uncaughtException', function (e) {
    console.log('uncaught found'+e.stack);
});
app.use('/', registerRoutes);


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
/// catch 404 and forward to error handler
/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        console.log(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {

    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



module.exports = app;