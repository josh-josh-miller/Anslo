"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var encryptSomething_1 = require("./encryptSomething");
var decryptSomething_1 = require("./decryptSomething");
var encryptTextNotText_1 = require("./encryptTextNotText");
var decryptTextNotText_1 = require("./decryptTextNotText");
var encryptKeyNotText_1 = require("./encryptKeyNotText");
var decryptKeyNotText_1 = require("./decryptKeyNotText");
var encryptKeyWrongLength_1 = require("./encryptKeyWrongLength");
var decryptKeyWrongLength_1 = require("./decryptKeyWrongLength");
exports.key = crypto_1.randomBytes(24).toString("base64");
exports.wrongLengthKey = crypto_1.randomBytes(6).toString("base64");
var nullKey = null;
function cryptoboxTesting() {
    test("it should be able to encrypt something", encryptSomething_1.encryptSomething);
    test("it should be able to decrypt something", decryptSomething_1.decryptSomething);
    test("it should be able to fail encrypt.text not text", encryptTextNotText_1.encryptTextNotText);
    test("it should be able to fail decrypt.text not text", decryptTextNotText_1.decryptTextNotText);
    test("it should be able to fail encrypt.key not text", encryptKeyNotText_1.encryptKeyNotText);
    test("it should be able to fail decrypt.key not text", decryptKeyNotText_1.decryptKeyNotText);
    test("it should be able to fail when encrypt.key wrong length", encryptKeyWrongLength_1.encryptKeyWrongLength);
    test("it should be able to fail when decrypt.key wrong length", decryptKeyWrongLength_1.decryptKeyWrongLength);
}
exports.cryptoboxTesting = cryptoboxTesting;
