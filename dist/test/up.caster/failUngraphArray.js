"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var up_caster_1 = require("../../src/up.caster");
var exceptions_1 = require("../../src/exceptions");
function failUngraphArray() {
    expect(function () {
        var data = {
            graph: { type: "array", references: "lksjdflk" },
            pointers: []
        };
        new up_caster_1.UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(exceptions_1.default.Exception);
    expect(function () {
        var data = {
            graph: { type: "array", references: 0, contents: "slkdjflkjsdf" },
            pointers: []
        };
        new up_caster_1.UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(exceptions_1.default.Exception);
    expect(function () {
        var data = {
            graph: { type: "array", references: 10, contents: {} },
            pointers: []
        };
        new up_caster_1.UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(exceptions_1.default.Exception);
}
exports.failUngraphArray = failUngraphArray;
