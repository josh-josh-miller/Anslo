"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var Anslo = require("../src/Index");
var Model_test_1 = require("./Model.test");
var anslo = new Anslo([
    Model_test_1.Model.User,
    Model_test_1.Model.Note
]);
describe("Anslo", function () {
    test("Should be able to create an instance and guts be there.", function () {
        expect(anslo).toBeInstanceOf(Anslo);
        expect(typeof anslo.constructors).toBe("object");
        expect(typeof anslo.parse).toBe("function");
        expect(typeof anslo.stringify).toBe("function");
    });
    test("Should be able to install constructors", function () {
        expect(anslo.constructors["User"]).toBe(Model_test_1.Model.User);
        expect(anslo.constructors["Note"]).toBe(Model_test_1.Model.Note);
    });
    test("Expect anslo not to throw if nothing was passed in the constructor", function () {
        expect(new Anslo()).toBeInstanceOf(Anslo);
    });
});
