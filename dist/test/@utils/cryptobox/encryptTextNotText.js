"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cryptobox_1 = require("../../../src/utils/cryptobox");
var exceptions_1 = require("../../../src/exceptions");
var testing_1 = require("./testing");
function encryptTextNotText() {
    expect(function () {
        cryptobox_1.Cryptobox.encrypt(null, testing_1.key);
    }).toThrow(exceptions_1.default.Exception);
}
exports.encryptTextNotText = encryptTextNotText;
