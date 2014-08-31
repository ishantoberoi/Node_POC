var utils = require('../lib/utils.js').utils;
var myprofile = require('../models/apimodels/myprofile.js').MyProfile;

module.exports = function(req,res,next){
	var myprof = new MyProfile({});
			getData = myprof.getData({});
			getData
				.then(function(dat){
					res.render('myprofile',{name:dat.name});	
				},function(e){
					utils.logError(e);
					next(e);
				})
				.done(null,function(e){
					utils.logError(e);
					next(e);
				})
}

