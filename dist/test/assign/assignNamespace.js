"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assign_1 = require("../../src/assign");
function assignNamespace() {
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    assign_1.default.namespaceToModels("one", {
        user: User,
    });
    expect(User["one"]).toBe("user");
}
exports.assignNamespace = assignNamespace;
