var utils = require('../../lib/utils.js').utils;
var httpapi = require('../../lib/httpapi.js').api;
var options = {
	hostname : '127.0.0.1',
	port     : '80',
	path     : '/node_poc/profile.json',
	method   : 'POST',
	headers  : { 'Content-Type' : 'application/x-www-form-urlencoded'}
}

// Creating parent class for api models

function ApiModel(opts){
	this.options = utils.extend(options,opts);
}

ApiModel.prototype.getData = function(data,fun){
	var obj = this;
	httpapi.makeRequest(this.options,data,function(err,dat){
		if(err){
			fun(err);
			return;
		}
		var data = obj.formatViewData(dat);
		fun(null,data);

	});
}

ApiModel.prototype.formatViewData = function(data){
	return data;
}

exports.ApiModel = ApiModel;


// 'use strict';
// var httpapi = require('../../lib/httpapi').api;
// var utils = require('../../lib/utils').utils;
// var Q = require('q');
// var configs = utils.configs;
// var options = {
//     hostname: configs.serviceBasePath,
//     port: configs.servicePort,
//     path: '/api/People.json',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// };
// /**
//  * @class Abstract class for api models. Do not create any instance
//  */
// function ApiModel(opts) {
//     this.options = utils.extend(options, opts);
// }
// ApiModel.prototype.getData = function (data, fnc) {
//     var obj = this,
//         def = Q.defer(),
//         httpProm = httpapi.makeRequest(this.options, data);
//     httpProm
//         .then(function (dat) {
//             data = obj.formatViewData(dat);
//             def.resolve(data);
//         }, function (e) {
//             def.reject(e);
//         });
//     return def.promise;
// };
// ApiModel.prototype.formatViewData = function (data) {
//     return data;
// };


// exports.ApiModel = ApiModel;