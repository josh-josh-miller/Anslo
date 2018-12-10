"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Anslo = require("../../src");
function correctMethods() {
    var anslo = new Anslo;
    expect(typeof anslo.up).toBe("function");
    expect(typeof anslo.down).toBe("function");
}
exports.correctMethods = correctMethods;
