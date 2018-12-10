"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var up_caster_1 = require("../../src/up.caster");
var exceptions_1 = require("../../src/exceptions");
function failUngraphDate() {
    expect(function () {
        var data = {
            graph: { type: "date", references: "lsdf" },
            pointers: []
        };
        new up_caster_1.UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(exceptions_1.default.Exception);
    expect(function () {
        var data = {
            graph: { type: "date", references: 0 },
            pointers: []
        };
        new up_caster_1.UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(exceptions_1.default.Exception);
    expect(function () {
        var data = {
            graph: { type: "date", references: 0, value: new Date().toISOString() },
            pointers: []
        };
        new up_caster_1.UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(exceptions_1.default.Exception);
}
exports.failUngraphDate = failUngraphDate;
