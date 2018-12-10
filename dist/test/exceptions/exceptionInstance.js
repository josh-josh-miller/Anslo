"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../../src/exceptions");
function exceptionInstance() {
    var exception = new exceptions_1.default.Exception("name", "message");
    expect(exception.toString()).toBe("[Anslo][name] message");
}
exports.exceptionInstance = exceptionInstance;
