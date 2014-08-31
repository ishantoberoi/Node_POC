var utils = require('../lib/utils.js').utils;
var myprofile = require('../models/apimodels/myprofile.js').MyProfile;

module.exports =  function (req, res, next) {
	var myprof = new myprofile({});
			//utils.log(JSON.stringify(myprof.options));
			//console.log(JSON.stringify(myprof.options));
			myprof.getData({},function(err,dat){
				if(err){
					next(err);
					return;
				}
				res.render('myprofile',{name:dat.name});
			});
}





// 'use strict';
// var utils = require('../lib/utils.js').utils;
// var util = require('util');
// var MyCards = require('../models/apimodels/MyCards.js').MyCards;


// //var time = process.hrtime();
// //console.log(diff[0] + diff[1] * 1e-9 + 's');

// /* GET home page. */


// module.exports = function (req, res, next) {
//     var model = new MyCards({}),
//         getDataPro = model.getData({});
//     getDataPro
//         .then(function (dat) {
//             res.render('mycards', dat);

//         }, function (e) {
//             utils.logError(e);
//             next(e);

//         })
//         .done(null, function (e) {
//             utils.logError(e);
//             next(e);

//         });
// };
