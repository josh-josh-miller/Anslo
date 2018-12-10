"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Anslo = require("../../src");
var model_1 = require("../model");
var crypto_1 = require("crypto");
function serialize() {
    var core = new Anslo({ User: model_1.default.User }, "core");
    var user = new model_1.default.User();
    var plain = core.down(user);
    var key = crypto_1.randomBytes(24).toString("base64");
    var encrypted = core.down(user, key);
    var withSpaces = core.down(user, null, 5);
    expect(typeof plain).toBe("string");
    expect(typeof encrypted).toBe("string");
    expect(typeof withSpaces).toBe("string");
}
exports.serialize = serialize;
