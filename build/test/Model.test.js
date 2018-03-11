"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var Model;
(function (Model) {
    var Settings = /** @class */ (function () {
        function Settings() {
            this.canDoSomething = false;
        }
        return Settings;
    }());
    Model.Settings = Settings;
    var Note = /** @class */ (function () {
        function Note() {
        }
        Note.prototype.doSomething = function () {
        };
        return Note;
    }());
    Model.Note = Note;
    var User = /** @class */ (function () {
        function User() {
            this.notes = [];
            this.settings = new Settings();
        }
        User.prototype.doSomething = function () {
        };
        return User;
    }());
    Model.User = User;
})(Model = exports.Model || (exports.Model = {}));
test("Should have the models", function () {
    expect(typeof Model.User).toBe("function");
    expect(typeof Model.Note).toBe("function");
});
