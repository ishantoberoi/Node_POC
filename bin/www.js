#!/usr/bin/env node

var debug = require('debug')('node-mon');
var app = require('../app');

app.set('port',process.env.PORT || 3000);
var server = app.listen(app.get('port'),function(){
	debug('Express is running on Port '+server.address().port);
	console.log(server.address());
});


