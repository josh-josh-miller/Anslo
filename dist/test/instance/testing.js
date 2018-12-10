"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Anslo = require("../../src");
var model_1 = require("../model");
var crypto_1 = require("crypto");
var anslo = new Anslo(model_1.default);
var defaultAnslo = new Anslo();
var namedAnslo = new Anslo({ Date: Date }, "something");
function instanceTesting() {
    test("should be able to create an instance", function () {
        expect(anslo).toBeInstanceOf(Anslo);
        expect(defaultAnslo).toBeInstanceOf(Anslo);
        expect(namedAnslo).toBeInstanceOf(Anslo);
        expect(function () {
            new Anslo(null);
        }).toThrow();
    });
    test("should have the approriate properties and methods", function () {
        expect(typeof anslo.down).toBe("function");
        expect(typeof anslo.up).toBe("function");
    });
    test("should be able to stringify", function () {
        var user = new model_1.default.User();
        expect(typeof anslo.down(user)).toBe("string");
        expect(typeof anslo.down(user, crypto_1.randomBytes(24).toString("base64"))).toBe("string");
        expect(typeof anslo.down(user, crypto_1.randomBytes(24).toString("base64"), 5)).toBe("string");
    });
    test("should be able to parse a string", function () {
        var user = new model_1.default.User();
        var string = anslo.down(user);
        var instance = anslo.up(string);
        expect(instance).toBeInstanceOf(model_1.default.User);
        expect(instance.name).toBe("Bob Something");
        expect(instance.email).toBe("bobsomething@gmail.com");
        expect(instance.somethings.length).toBe(100);
        expect(instance.somethings[0]).toBeInstanceOf(model_1.default.Post);
        expect(namedAnslo.up(string).created).toBeInstanceOf(Date);
    });
    test("it should be able to create and parse encrypted data", function () {
        var key = crypto_1.randomBytes(24).toString("base64");
        var string = anslo.down({ name: "something" }, key);
        var data = anslo.up(string, key);
        expect(data.name).toBe("something");
    });
}
exports.instanceTesting = instanceTesting;
