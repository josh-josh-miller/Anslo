"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var up_caster_1 = require("../../src/up.caster");
var exceptions_1 = require("../../src/exceptions");
function failUngraphObject() {
    var data = {
        pointers: [],
        graph: {
            r: null,
            t: "object"
        }
    };
    expect(function () {
        new up_caster_1.UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(exceptions_1.default.Exception);
}
exports.failUngraphObject = failUngraphObject;
