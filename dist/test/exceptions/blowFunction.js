"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../../src/exceptions");
function blowFunction() {
    expect(function () {
        exceptions_1.default.blow("name", "message");
    }).toThrow();
}
exports.blowFunction = blowFunction;
