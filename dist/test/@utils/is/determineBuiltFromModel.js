"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
function determineBuiltFromModel() {
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    User["namex"] = "User";
    expect(is_1.default.builtFromModel("namex", { User: User }, new User)).toBe(true);
}
exports.determineBuiltFromModel = determineBuiltFromModel;
