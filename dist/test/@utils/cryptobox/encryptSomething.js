"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cryptobox_1 = require("../../../src/utils/cryptobox");
var testing_1 = require("./testing");
function encryptSomething() {
    var string = cryptobox_1.Cryptobox.encrypt("something", testing_1.key);
    expect(typeof string).toBe("string");
}
exports.encryptSomething = encryptSomething;
