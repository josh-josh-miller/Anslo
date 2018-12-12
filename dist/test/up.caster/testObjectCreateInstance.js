"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Anslo = require("../../src");
function testObjectCreateInstance() {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    var user = new User("Something");
    var anslo = new Anslo(Object.assign({ User: User }));
    var string = anslo.down(user);
    var newUser = anslo.up(string);
    expect(newUser.name === "Something").toBe(true);
    expect(newUser).toBeInstanceOf(User);
}
exports.testObjectCreateInstance = testObjectCreateInstance;
