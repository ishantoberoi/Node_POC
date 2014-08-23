var http = require('http');
var querystring = require('querystring');
var options = {
	hostname : '127.0.0.1',
	port     :  80,
	method   : 'POST',
	path     : '/node_poc/profile.json',
}

exports.api = {
	makeRequest : function(op,data,fn){
		op = op || options;
		var chk = '';
		var req = http.request(op, function(res){
			res.on('data',function(chunk){
				chk += chunk.toString();
			});
			res.on('end',function(){
				fn(null,chk);
			});
			res.on('error',function(e){
				console.log('Error Occured in getting data '+e);
				fn(e);
			})
		});
		req.on('error',function(e){
			console.log('Error Occured in getting data '+e);
			fn(e);
		});
		req.end(querystring.stringify(data));
	}
}