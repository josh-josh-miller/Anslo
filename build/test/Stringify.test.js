"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var Index_1 = require("../src/Index");
var Model_test_1 = require("./Model.test");
var anslo = new Index_1.Anslo([
    Model_test_1.Model.User,
    Model_test_1.Model.Note,
    Model_test_1.Model.Settings
]);
describe("Anslo.stringify", function () {
    test("Should be able to stringify an instance of an object and mark it", function () {
        var user = new Model_test_1.Model.User;
        user.name = "Some Name";
        user.created = new Date();
        user.notes.push(new Model_test_1.Model.Note);
        var string = anslo.stringify(user);
        expect(typeof string).toBe("string");
        expect(/\"\#type\":\"User\"/g.test(string)).toBe(true);
        expect(/\"\#type\":\"Settings\"/g.test(string)).toBe(true);
        expect(/\"\#type\":\"Note\"/g.test(string)).toBe(true);
    });
    test("Stringify something that is not an object or array", function () {
        expect(anslo.stringify(false)).toBe("false");
    });
    test("Stringify an array", function () {
        var string = anslo.stringify([new Model_test_1.Model.User]);
        expect(/\"\#type\":\"User\"/g.test(string)).toBe(true);
    });
});
