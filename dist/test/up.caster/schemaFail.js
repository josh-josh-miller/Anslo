"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var up_caster_1 = require("../../src/up.caster");
var exceptions_1 = require("../../src/exceptions");
function schemaFail() {
    expect(function () {
        var up = new up_caster_1.UpCaster("name", {}, "{}");
    }).toThrow(exceptions_1.default.Exception);
    expect(function () {
        var up = new up_caster_1.UpCaster("name", {}, '{"pointers": []}');
    }).toThrow(exceptions_1.default.Exception);
}
exports.schemaFail = schemaFail;
