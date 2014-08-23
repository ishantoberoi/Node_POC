var fs = require('fs');
var path = '';
var obj = {
	log: function(obj){
		var str = '\n'+obj.toString()+'[  '+Date.now()+' '+new Date().toString()+' ]\n';
		fs.writeFile('/Users/ishant.oberoi/Desktop/test_node_poc.txt',str,{flag:'a'},function(err){
			if(err){
				console.log(err);
			}
		});
	},
	extend: function(a,b){
		var bKeys = Object.keys(b);
		var len = bKeys.length;
		for(var i=0;i<len;i+=1){
			if(typeof(b[bKeys[i]]) == 'function'){
				throw Error('Extend cannot add functions');
			}
			a[bKeys[i]] = typeof(b[bKeys[i]]) !== 'object' ? b[bKeys[i]] : JSON.parse(JSON.stringify(b[bKeys[i]]));
		}
		return a;
	}
}
exports.utils = obj;