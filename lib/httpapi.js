'use strict';
var http = require('http');
var utils = require('./utils');
var querystring = require('querystring');
var Q = require('q');
var options = {
};
exports.api = {
    makeRequest: function (op, data, fn) {
        op = op || options;
        var chk = '',
            def = Q.defer(),
            req;
        req = http.request(op, function (resp) {
            resp.on('data', function (chunk) {
                chk += chunk.toString();
            });
            resp.on('end', function () {
                def.resolve(chk);
            });
            resp.on('error', function (e) {
                console.log('problem with response: ' + e);
                def.reject(e);
            });
        });
        req.on('error', function (e) {
            def.reject(e);
            console.log('problem with request: ' + e);

        });
        req.end(querystring.stringify(data));
        return def.promise;

    }
}