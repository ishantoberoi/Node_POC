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

// View Engine setup
app.use("view",path.join(__dirname + "views"));
app.use("view engine","ejs");

console.log(util.inspect(util,{showHidden:true,depth:null,colors:true}));

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname+'public'),{maxAge:-100}));
app.use(session({
	secret:"ishant",
	saveUninitialized:true,
	resave:true
}));


process.on("uncaughtExecption",function(e){
	console.log("Uncaught Execption"+e);
});

app.use("/", reqisterRoutes);

/* Error Handling on Dev */
if(app.get('env') === "development"){
	app.use(function(err,req,res,next){
		console.log(err);
		res.status(res.status || 500);
		res.render('render',{
			mesage:err.mesage,
			error:err
		});
	});
}

app.use(function(err,req,res,next){
	res.status(res.status || 500);
	res.render('error',{
		message:err.message,
		error: {}
	});
});


module.exports = app;