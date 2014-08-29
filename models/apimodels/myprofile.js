var oo = require('../../lib/oo.js').inherit;
var utils = require('../../lib/utils.js').utils;
var ApiModel = require('./apimodel.js').ApiModel;
var options = {
    hostname: '127.0.0.1',
    port: 80,
    path: '/node_poc/profile.json',
    method: 'POST'
}

function MyProfile(opts){
	opts = utils.extend(options,opts);
	ApiModel.call(this,opts);
}

//Inheriting from ApiModel

oo(ApiModel,MyProfile);

MyProfile.prototype.formatViewData = function(data){
	var obj = {};
	try{
		obj = JSON.parse(data);
	}
	catch(e){
		console.log("here"+e);
		utils.log("Cannot parse to Json "+e);
	}
	return obj;
}

exports.MyProfile = MyProfile;