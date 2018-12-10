"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Anslo = require("../../src");
var up_caster_1 = require("../../src/up.caster");
function contextInstancePointer() {
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    var user = new User();
    var anslo = new Anslo({ User: User }, "something");
    var string = anslo.down({
        userone: user,
        settings: {
            usertwo: user
        }
    });
    var up = new up_caster_1.UpCaster("@~anslo.something", { User: User }, string).toInstance();
    expect(up.userone === up.settings.usertwo).toBe(true);
}
exports.contextInstancePointer = contextInstancePointer;
