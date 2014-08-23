var utils = require('../lib/utils.js').utils;
var myprofile = require('../models/apimodels/myprofile.js').MyProfile;

module.exports =  function (req, res, next) {
	var myprof = new myprofile({});
			myprof.getData({},function(err,dat){
				if(err){
					next(err);
					return;
				}
				res.render('myprofile',{name:dat.name});
			});
}





