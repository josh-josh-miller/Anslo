"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var Index_1 = require("../src/Index");
var Model_test_1 = require("./Model.test");
var anslo = new Index_1.Anslo([
    Model_test_1.Model.User,
    Model_test_1.Model.Note
]);
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var anslo2 = anslo.split([User]);
describe("Anslo", function () {
    test("Should be able to split an anslo instance", function () {
        expect(anslo2).toBeInstanceOf(Index_1.Anslo);
        expect(anslo2.constructors["User"]).toBe(User);
    });
    test("Empty split", function () {
        var instance = anslo.split();
        expect(instance.constructors["User"]).toBe(Model_test_1.Model.User);
        expect(instance.constructors["Note"]).toBe(Model_test_1.Model.Note);
    });
});
