/**
 * Created by bernd on 27.12.13.
 */

"use strict";

var server = require('./server.js');

exports.testNothing = function (test) {
    test.equals(3, server.number(), 'number');
    test.done();
};