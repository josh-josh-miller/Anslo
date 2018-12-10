"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Anslo = require("../../src");
var model_1 = require("../model");
var crypto_1 = require("crypto");
var createInstance_1 = require("./createInstance");
var correctMethods_1 = require("./correctMethods");
var serialize_1 = require("./serialize");
function unserialize() {
    var core = new Anslo(model_1.default, "core");
    var user = new model_1.default.User();
    var plain = core.down(user);
    var key = crypto_1.randomBytes(24).toString("base64");
    var encrypted = core.down(user, key);
    var withSpaces = core.down(user, null, 5);
    expect(core.up(plain)).toEqual(user);
    expect(core.up(encrypted, key)).toEqual(user);
    expect(core.up(withSpaces)).toEqual(user);
}
function ansloTesting() {
    test("it should be able to create an instance", createInstance_1.createInstance);
    test("it should have the correct methods", correctMethods_1.correctMethods);
    test("it should be able to serialize", serialize_1.serialize);
    test("it should be able to unserialize", unserialize);
}
exports.ansloTesting = ansloTesting;