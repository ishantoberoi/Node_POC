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