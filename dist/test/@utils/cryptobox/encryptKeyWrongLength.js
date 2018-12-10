"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cryptobox_1 = require("../../../src/utils/cryptobox");
var exceptions_1 = require("../../../src/exceptions");
var testing_1 = require("./testing");
function encryptKeyWrongLength() {
    expect(function () {
        cryptobox_1.Cryptobox.encrypt("lsdkfjlkjsdf", testing_1.wrongLengthKey);
    }).toThrow(exceptions_1.default.Exception);
}
exports.encryptKeyWrongLength = encryptKeyWrongLength;
