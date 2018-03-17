"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var Anslo = require("../src/Index");
var Model_test_1 = require("./Model.test");
var anslo = new Anslo([
    Model_test_1.Model.User,
    Model_test_1.Model.Note,
    Model_test_1.Model.Settings
]);
var anslo2 = new Anslo([
    Model_test_1.Model.User,
    Model_test_1.Model.Note,
    Model_test_1.Model.Settings,
    Date
]);
var anslo3 = new Anslo([]);
var string = JSON.stringify({
    name: "Something name",
    created: new Date(),
    "#type": "User"
});
var badstring = JSON.stringify({
    name: "Plain Instance Name",
    "#type": {}
});
describe("Anslo.stringify", function () {
    test("Should be able to parse an instance of an object with the type flag", function () {
        var user = anslo.parse(string);
        expect(user).toBeInstanceOf(Model_test_1.Model.User);
        expect(user.name).toBe("Something name");
        expect(typeof user.created).toBe("string");
    });
    test("Should be able to parse date strings", function () {
        var user = anslo2.parse(string);
        expect(user).toBeInstanceOf(Model_test_1.Model.User);
        expect(user.name).toBe("Something name");
        expect(user.created instanceof Date).toBe(true);
    });
    test("Test with reviver", function () {
        var user = anslo2.parse(string, function (key, value) {
            if (key === "name") {
                return "Something else";
            }
            return value;
        });
        expect(user).toBeInstanceOf(Model_test_1.Model.User);
        expect(user.name).toBe("Something else");
        expect(user.created instanceof Date).toBe(true);
    });
    test("Should throw if type is not installed", function () {
        expect(function () {
            anslo3.parse(string);
        }).toThrowError();
    });
    test("Should fall through if #type is not a string", function () {
        expect(anslo.parse(badstring)).toBeInstanceOf(Object);
    });
});
