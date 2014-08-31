'use strict';
var httpapi = require('../../lib/httpapi').api;
var utils = require('../../lib/utils').utils;
var Q = require('q');
var configs = utils.configs;
var options = {
    hostname: configs.serviceBasePath,
    port: configs.servicePort,
    path: '/node_poc/profile.json',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};
/**
 * @class Abstract class for api models. Do not create any instance
 */
function ApiModel(opts) {
    this.options = utils.extend(options, opts);
}
ApiModel.prototype.getData = function (data, fnc) {
    var obj = this,
        def = Q.defer(),
        httpProm = httpapi.makeRequest(this.options, data);
    httpProm
        .then(function (dat) {
            data = obj.formatViewData(dat);
            def.resolve(data);
        }, function (e) {
            def.reject(e);
        });
    return def.promise;
};
ApiModel.prototype.formatViewData = function (data) {
    return data;
};


exports.ApiModel = ApiModel;