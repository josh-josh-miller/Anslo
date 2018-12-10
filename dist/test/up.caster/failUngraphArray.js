"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var up_caster_1 = require("../../src/up.caster");
var exceptions_1 = require("../../src/exceptions");
function failUngraphArray() {
    expect(function () {
        var data = {
            graph: { t: "array", r: "lksjdflk" },
            pointers: []
        };
        new up_caster_1.UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(exceptions_1.default.Exception);
    expect(function () {
        var data = {
            graph: { t: "array", r: 0, c: "slkdjflkjsdf" },
            pointers: []
        };
        new up_caster_1.UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(exceptions_1.default.Exception);
    expect(function () {
        var data = {
            graph: { t: "array", r: 10, c: {} },
            pointers: []
        };
        new up_caster_1.UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(exceptions_1.default.Exception);
}
exports.failUngraphArray = failUngraphArray;
