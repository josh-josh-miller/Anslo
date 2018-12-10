"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Anslo = require("../../src");
var model_1 = require("../model");
function serialize() {
    var core = new Anslo({ User: model_1.default.User }, "core");
    var user = new model_1.default.User();
    var plain = core.down(user);
    var withSpaces = core.down(user, 4);
    expect(typeof plain).toBe("string");
    expect(typeof withSpaces).toBe("string");
    expect(withSpaces.indexOf("\n")).toBeGreaterThan(-1);
}
exports.serialize = serialize;
