"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var Index_1 = require("../src/Index");
var Model_test_1 = require("./Model.test");
var anslo = new Index_1.Anslo([
    Model_test_1.Model.User,
    Model_test_1.Model.Note
]);
describe("Anslo", function () {
    test("Should be able to forget a constructor", function () {
        anslo.forget("User");
        anslo.forget(Model_test_1.Model.Note);
        expect(anslo.constructors["User"]).toBe(undefined);
        expect(anslo.constructors["Note"]).toBe(undefined);
    });
    test("Should not fail on a bad name", function () {
        anslo.forget("Something that doesn't exist");
        anslo.forget(Comment);
    });
});
