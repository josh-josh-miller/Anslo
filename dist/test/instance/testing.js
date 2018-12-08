"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Anslo = require("../../src");
var ts_1 = require("../../src/ts");
var model_1 = require("../model");
var anslo = new Anslo(model_1.default);
var defaultAnslo = new Anslo();
var namedAnslo = new Anslo({ Date: Date }, "something");
var unknownAnslo = new Anslo(void 0, null);
var ansloTs = new ts_1.default();
function instanceTesting() {
    test("should be able to create an instance", function () {
        expect(anslo).toBeInstanceOf(Anslo);
        expect(defaultAnslo).toBeInstanceOf(Anslo);
        expect(namedAnslo).toBeInstanceOf(Anslo);
        expect(ansloTs).toBeInstanceOf(Anslo);
        expect(namedAnslo.tag).toBe("@~something");
        expect(unknownAnslo.tag).toBe("@~unknown");
        expect(function () {
            new Anslo(null);
        }).toThrow();
    });
    test("should have the approriate properties and methods", function () {
        expect(typeof anslo.tag).toBe("string");
        expect(typeof anslo.stringify).toBe("function");
        expect(typeof anslo.parse).toBe("function");
    });
    test("should be able to stringify", function () {
        var user = new model_1.default.User();
        expect(typeof anslo.stringify(user)).toBe("string");
        expect(typeof anslo.stringify(user, 2)).toBe("string");
    });
    test("should be able to parse a string", function () {
        var user = new model_1.default.User();
        var string = anslo.stringify(user);
        var instance = anslo.parse(string);
        expect(instance).toBeInstanceOf(model_1.default.User);
        expect(instance.name).toBe("Bob Something");
        expect(instance.email).toBe("bobsomething@gmail.com");
        expect(instance.somethings.length).toBe(100);
        expect(instance.somethings[0]).toBeInstanceOf(model_1.default.Post);
        expect(namedAnslo.parse(string).created).toBeInstanceOf(Date);
    });
}
exports.instanceTesting = instanceTesting;
