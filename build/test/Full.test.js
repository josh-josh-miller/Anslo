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
describe("Anslo", function () {
    test("Something Crazy", function () {
    });
});
