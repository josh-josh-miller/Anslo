"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var blowFunction_1 = require("./blowFunction");
var exceptionInstance_1 = require("./exceptionInstance");
function exceptionsTesting() {
    test("it should be able to produce an exception instance", exceptionInstance_1.exceptionInstance);
    test("it should be able to throw with the blow function", blowFunction_1.blowFunction);
}
exports.exceptionsTesting = exceptionsTesting;
