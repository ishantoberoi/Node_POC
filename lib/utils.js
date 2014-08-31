'use strict';
var fs = require('fs');
var path = '';
var config;

// Helper functions
function loadConfig() {
    var env = process.env.RUN_ENV;
    if (config) {
        return config;
    }
    config = require('../configs/' + (env || 'locals'));
    return config;
}

var obj = {
    log: function (obj) {
        var str = '\n' + obj.toString() + '\n[ ' + Date.now() + '    ' + new Date().toString() + ']\n';
        fs.writeFile("/home/ishant/Desktop/node_poc_test.txt", str, {flag: 'a'}, function (err) {
            if (err) {
                console.log(err);
            }
        });
    },
    extend: function (a, b) {
        var bKeys = Object.keys(b),
            len = bKeys.length,
            i;
        for (i = 0; i < len; i += 1) {
            if (typeof b[bKeys[i]] === 'function') {
                throw new Error("extend cannot add functions");
            }
            a[bKeys[i]] = typeof b[bKeys[i]] !== 'object' ? b[bKeys[i]] : JSON.parse(JSON.stringify(b[bKeys[i]]));
        }
        return a;

    },
    logError: function (err) {
        var str = '';
        if (err.message) {
            str += err.message + '\n';
        }
        if (err.stack) {
            str += err.stack;
        }
        this.log(str);
    },
    configs: loadConfig()

};
exports.utils = obj;