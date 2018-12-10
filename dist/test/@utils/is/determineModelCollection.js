"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
var exceptions_1 = require("../../../src/exceptions");
function determineModelCollection() {
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    expect(function () {
        is_1.default.everyPropertyConstructable("name", { User: User, tow: null });
    }).toThrow(exceptions_1.default.Exception);
}
exports.determineModelCollection = determineModelCollection;
